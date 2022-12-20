// tailwind css compoenent plugin
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    const components = {
        '.btn': {
            padding: theme('spacing.2'),
            borderRadius: theme('borderRadius.lg'),
            backgroundColor: theme('colors.blue.500'),
            color: theme('colors.white'),
            '&:hover': {
                backgroundColor: theme('colors.blue.600'),
            },
        },
    }
    addComponents(components)
    }
)