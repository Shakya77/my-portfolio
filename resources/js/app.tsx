import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import { route as routeFn } from 'ziggy-js'; // Import the route function
import { initializeTheme } from './hooks/use-appearance';
import { Ziggy } from './ziggy'; // Import Ziggy configuration

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Define the global route helper correctly
window.route = (name: string, params?: any, absolute?: boolean) => {
    return routeFn(name, params, absolute, Ziggy);
};

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();