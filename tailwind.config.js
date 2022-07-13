module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#BB86FC',
                'primary-bg': '#161118'
            },
            fontFamily: {
                'league-spartan': ['League Spartan', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
