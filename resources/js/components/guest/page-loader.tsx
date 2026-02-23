import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function PageLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Always hide loader after mount (covers initial page open)
        const initialTimer = setTimeout(() => setVisible(false), 600);

        // Inertia page navigation
        let navTimer: ReturnType<typeof setTimeout>;

        const removeStart = router.on('start', () => {
            clearTimeout(navTimer);
            setVisible(true);
        });

        const removeFinish = router.on('finish', () => {
            navTimer = setTimeout(() => setVisible(false), 300);
        });

        return () => {
            clearTimeout(initialTimer);
            clearTimeout(navTimer);
            removeStart();
            removeFinish();
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
            style={{
                animation: visible ? 'none' : 'fadeOut 0.4s ease forwards',
            }}
        >
            <div className="flex flex-col items-center gap-8">
                <p className="text-xl font-bold text-white tracking-tight">
                    Portfolio<span className="text-[#eb5d3a]">.</span>
                </p>
                <div className="w-[120px] h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div
                        className="h-full w-[40%] bg-[#eb5d3a] rounded-full"
                        style={{ animation: 'loaderSlide 1s ease-in-out infinite' }}
                    />
                </div>
            </div>
        </div>
    );
}
