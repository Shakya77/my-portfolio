import { useEffect, useRef, useCallback } from 'react';

export default function CursorEffect() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: -100, y: -100 });
    const dotPos = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });
    const rafId = useRef<number>(0);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = useCallback(() => {
        dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.35);
        dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.35);

        ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
        ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

        if (dotRef.current) {
            dotRef.current.style.left = `${dotPos.current.x}px`;
            dotRef.current.style.top = `${dotPos.current.y}px`;
        }
        if (ringRef.current) {
            ringRef.current.style.left = `${ringPos.current.x}px`;
            ringRef.current.style.top = `${ringPos.current.y}px`;
        }

        rafId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouchDevice) return;

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], label');
            if (ringRef.current) {
                if (isInteractive) {
                    ringRef.current.classList.add('hover');
                } else {
                    ringRef.current.classList.remove('hover');
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(rafId.current);
        };
    }, [animate]);

    return (
        <>
            <div ref={ringRef} className="cursor-ring" />
            <div ref={dotRef} className="cursor-dot" />
        </>
    );
}
