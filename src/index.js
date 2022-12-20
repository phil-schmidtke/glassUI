// tailwind css compoenent plugin
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    
    /*
    TODO: Reusable Glass Look with diffrent Tones
    TODO: Sidebar
    */


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
            background: 'rgba( 255, 255, 255, 0.05 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.10 )',
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba(35, 33, 81, 0.35)',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: '10px',
                border: '2px solid rgba( 255, 255, 255, 0.20 )',
                transition: 'all 0.15s ease-in-out',
            },
        },
        '.btn-sm': {
            fontSize: theme('fontSize.sm'),
            width: 'fit-content',
            paddingTop: theme('spacing.1'),
            paddingBottom: theme('spacing.1'),
            paddingLeft: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
            background: 'rgba( 255, 255, 255, 0.05 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.10 )',
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba(35, 33, 81, 0.35)',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: '10px',
                border: '2px solid rgba( 255, 255, 255, 0.20 )',
                transition: 'all 0.15s ease-in-out',
            },
        },
        '.btn-outline': {
            width: 'fit-content',
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4'),
            background: 'transparent',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.30 )',
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba(35, 33, 81, 0.35)',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: '10px',
                border: '2px solid rgba( 255, 255, 255, 0.20 )',
                transition: 'all 0.15s ease-in-out',
            },
        },
        '.btn-outline-sm': {
            width: 'fit-content',
            paddingTop: theme('spacing.1'),
            paddingBottom: theme('spacing.1'),
            paddingLeft: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
            background: 'transparent',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.30 )',
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba(35, 33, 81, 0.35)',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: '10px',
                border: '2px solid rgba( 255, 255, 255, 0.20 )',
                transition: 'all 0.15s ease-in-out',
            },
        },
    }

    /*
        * * CARDS 
        TODO: everthing
    */
    const cards = {
        '.card': {
            padding: theme('spacing.4'),
            background: 'rgba( 255, 255, 255, 0.25 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
        },
    }

    addComponents(buttons)
    addComponents(cards)
    }
)