module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'current': 'currentColor',
                'primary': '#BB86FC',
                'primary-bg': '#161118'
            },
            fontFamily: {
                'league-spartan': ['League Spartan', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
