module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#BB86FC',
                'primary-bg': '#211D27'
            },
            fontFamily: {
                'knewave': ['Knewave', 'cursive'],
                'fredoka-one': ['Fredoka One', 'cursive'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
