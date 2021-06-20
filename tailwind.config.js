const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
        mode: 'layers',
        content: ['./public/**/*.html', './src/**/*.vue'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: colors.gray,
                blue: colors.blue,
                rose: colors.rose,
                orange: colors.orange,
                primary: '#D03731'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
