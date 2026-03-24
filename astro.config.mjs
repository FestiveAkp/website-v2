import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [icon()],
    fonts: [
        {
            name: 'Inter',
            cssVariable: '--font-inter',
            provider: fontProviders.fontsource(),
        },
        {
            name: 'Outfit',
            cssVariable: '--font-outfit',
            provider: fontProviders.fontsource(),
            weights: [300, 600],
        },
    ],
});
