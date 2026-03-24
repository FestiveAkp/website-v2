import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
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
