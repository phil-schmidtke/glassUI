// tailwind css compoenent plugin
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    
    /*
        * * Buttons 
        TODO: everthing
    */
    const buttons = {
        '.btn': {
            width: 'fit-content',
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4'),
            borderRadius: theme('borderRadius.xl'),
            backgroundColor: theme('colors.gray.600'),
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme('colors.gray.500'),
            },
        },
        '.btn-full': {
            width: '100%',
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4'),
            borderRadius: theme('borderRadius.xl'),
            backgroundColor: theme('colors.gray.600'),
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme('colors.gray.500'),
            },
        },
        '.btn-sm': {
            width: 'fit-content',
            paddingTop: theme('spacing.1'),
            paddingBottom: theme('spacing.1'),
            paddingLeft: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
            borderRadius: theme('borderRadius.xl'),
            backgroundColor: theme('colors.gray.600'),
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme('colors.gray.500'),
            },
        },
        '.btn-outline': {
            width: 'fit-content',
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4'),
            borderRadius: theme('borderRadius.xl'),
            backgroundColor: theme('colors.transparent'),
            color: theme('colors.black'),
            border: '2px solid #4b5563',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme('colors.gray.600'),
            },
        },
        '.btn-outline-full': {
            width: '100%',
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4'),
            borderRadius: theme('borderRadius.xl'),
            backgroundColor: theme('colors.white'),
            color: theme('colors.gray.600'),
            cursor: 'pointer',
            backgroundColor: theme('colors.transparent'),
            color: theme('colors.black'),
            border: '2px solid #4b5563',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme('colors.gray.600'),
            },
        },
    }

    /*
        * * CARDS 
        TODO: everthing
    */
    const cards = {
        '.card': {
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.xl'),
            boxShadow: theme('boxShadow.md'),
            padding: theme('spacing.4'),
        },
    }

    addComponents(buttons, cards)
    }
)