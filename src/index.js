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
        '.btn-md': {
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
            borderRadius: '8px',
            border: '2px solid rgba( 255, 255, 255, 0.10 )',
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba(35, 33, 81, 0.35)',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: '8px',
                border: '2px solid rgba( 255, 255, 255, 0.20 )',
                transition: 'all 0.15s ease-in-out',
            },
        },
        '.btn-sm': {
            fontSize: theme('fontSize.xs'),
            width: 'fit-content',
            paddingTop: theme('spacing.0.5'),
            paddingBottom: theme('spacing.0.5'),
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1'),
            background: 'rgba( 255, 255, 255, 0.05 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '5px',
            border: '2px solid rgba( 255, 255, 255, 0.10 )',
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba(35, 33, 81, 0.35)',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: '5px',
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
        '.btn-outline-md': {
            width: 'fit-content',
            fontSize: theme('fontSize.sm'),
            paddingTop: theme('spacing.1'),
            paddingBottom: theme('spacing.1'),
            paddingLeft: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
            background: 'transparent',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            borderRadius: '8px',
            border: '2px solid rgba( 255, 255, 255, 0.30 )',
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba(35, 33, 81, 0.35)',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: '8px',
                border: '2px solid rgba( 255, 255, 255, 0.20 )',
                transition: 'all 0.15s ease-in-out',
            },
        },
        '.btn-outline-sm': {
            width: 'fit-content',
            fontSize: theme('fontSize.xs'),
            paddingTop: theme('spacing.0.5'),
            paddingBottom: theme('spacing.0.5'),
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1'),
            background: 'transparent',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            borderRadius: '8px',
            border: '2px solid rgba( 255, 255, 255, 0.30 )',
            color: theme('colors.white'),
            cursor: 'pointer',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                boxShadow: '0 8px 32px 0 rgba(35, 33, 81, 0.35)',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: '8px',
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
            width: '100%',
            padding: theme('spacing.4'),
            background: 'rgba( 255, 255, 255, 0.25 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
        },
        '.card-light': {
            width: '100%',
            padding: theme('spacing.4'),
            background: 'rgba( 255, 255, 255, 0.10 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.10 )',
        },
        '.card-outline': {
            width: '100%',
            padding: theme('spacing.4'),
            background: 'transparent',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                transition: 'all 0.20s ease-in-out',
            },
        },
    }

    /*
        * * Header / Nav
        TODO: everthing
    */
    const header = {
        '.header': {
            width: '100%',
            padding: theme('spacing.2'),
            background: 'rgba( 255, 255, 255, 0.15 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadiusBottom: '10px',
            borderBottom: '2px solid rgba( 255, 255, 255, 0.20 )',
        },
        '.nav-link': {
            marginLeft: theme('spacing.2'),
            marginRight: theme('spacing.2'),
            color: theme('colors.gray.300'),
            cursor: 'pointer',
            userSelect: 'none',
            webkitUserSelect: 'none',
            '&:hover': {
                color: theme('colors.white'),
                transition: 'all 0.15s ease-in-out',
            },
        },
        '.nav-link-underline': {
            marginLeft: theme('spacing.2'),
            marginRight: theme('spacing.2'),
            color: theme('colors.gray.300'),
            cursor: 'pointer',
            userSelect: 'none',
            webkitUserSelect: 'none',
            display: 'inline-block',
            '&:hover': {
                color: theme('colors.white'),
                transition: 'all 0.15s ease-in-out',
            },
            '&:after': {
                display: 'block',
                content: '""',
                borderBottom: '2px solid white',
                transform: 'scaleX(0)',
                transition: 'transform 0.15s ease-in-out',
            },
            '&:hover:after': {
                transform: 'scaleX(1)',
            },
        },
        '.nav-link-underline-active': {
            marginLeft: theme('spacing.2'),
            marginRight: theme('spacing.2'),
            cursor: 'pointer',
            userSelect: 'none',
            webkitUserSelect: 'none',
            color: theme('colors.white'),
            '&:after': {
                display: 'block',
                content: '""',
                borderBottom: '2px solid white',
                transform: 'scaleX(1)',
                transition: 'transform 0.15s ease-in-out',
            },
        },
    }

    /*
        * * Input Fields
        TODO: everthing
    */
    const inputs = {
        '.input': {
            color: 'white',
            twRingShadow: '0 0 #000 !important',
            padding: theme('spacing.2'),
            background: 'rgba( 255, 255, 255, 0.25 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
            twRingOffsetShadow: 0,
            twRingShadow: 0,
            boxShadow: 0,
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                transition: 'all 0.20s ease-in-out',
            },
            '&::placeholder': {
                color: theme('colors.gray.300'),
            }
        },
        '.input-sm': {
            color: 'white',
            twRingShadow: '0 0 #000 !important',
            padding: theme('spacing.1'),
            background: 'rgba( 255, 255, 255, 0.25 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
            twRingOffsetShadow: 0,
            twRingShadow: 0,
            boxShadow: 0,
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                transition: 'all 0.20s ease-in-out',
            },
            '&::placeholder': {
                color: theme('colors.gray.300'),
            }
        },
        '.input-outline': {
            color: 'white',
            twRingShadow: '0 0 #000 !important',
            padding: theme('spacing.2'),
            background: 'transparent',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
            twRingOffsetShadow: 0,
            twRingShadow: 0,
            boxShadow: 0,
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                transition: 'all 0.20s ease-in-out',
            },
            '&::placeholder': {
                color: theme('colors.gray.300'),
            }
        },
        '.input-outline-sm': {
            color: 'white',
            twRingShadow: '0 0 #000 !important',
            padding: theme('spacing.1'),
            background: 'transparent',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
            twRingOffsetShadow: 0,
            twRingShadow: 0,
            boxShadow: 0,
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                transition: 'all 0.20s ease-in-out',
            },
            '&::placeholder': {
                color: theme('colors.gray.300'),
            }
        },
    }

    /*
        * * Checkboxes
        TODO: Provide Layout with Prefixes
    */
   const checkboxes = {
        '.checkbox': {
            display: 'grid',
            placeContent: 'center',
            width: '1.5rem',
            height: '1.5rem',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            borderRadius: '5px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
            twBgOpacity: 1,
            backgroundColor: 'transparent',
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                transition: 'all 0.20s ease-in-out',
            },
            '&:checked': {
                background: 'black',
                transition: 'all 0.20s ease-in-out',
            },
            '&:before': {
                content: "",
                width: '0.65em',
                height: '0.65em',
                transform: 'scale(0)',
                transition: '120ms transform ease-in-out',
                boxShadow: 'inset 1em 1em var(--form-control-color)',
            },
            '&:checked:before': {
                transform: 'scale(1)',
            },
        },
   }

   /*
        * * Selects
        TODO
    */
    const selects = {
        '.select': {
            color: 'white',
            paddingTop: theme('spacing.2'),
            paddingLeft: theme('spacing.3'),
            paddingRight: theme('spacing.10'),
            textAlign: 'left',
            twRingShadow: '0 0 #000 !important',
            padding: theme('spacing.2'),
            background: 'rgba( 255, 255, 255, 0.25 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
            twRingOffsetShadow: 0,
            twRingShadow: 0,
            boxShadow: 0,
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                transition: 'all 0.20s ease-in-out',
            },
            '&::placeholder': {
                color: theme('colors.gray.300'),
            }
        },
        '.select-option': {
            color: theme('colors.gray.300'),
            twRingShadow: '0 0 #000 !important',
            padding: theme('spacing.2'),
            backgroundColor: 'transparent',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadius: '10px',
            border: '2px solid rgba( 255, 255, 255, 0.20 )',
            twRingOffsetShadow: 0,
            twRingShadow: 0,
            boxShadow: 0,
            '&:hover': {
                background: 'rgba( 255, 255, 255, 0.25 )',
                transition: 'all 0.20s ease-in-out',
            },
            '&::placeholder': {
                color: theme('colors.gray.300'),
            }
        }
    }


    /*
        * * Code Previews
        TODO: Provide Layout with Prefixes
    */
    const code = {
        '.code': {
            position: 'relative',
            overflow: 'hidden',
            overflowX: 'auto',
            minWidth: '18rem',
            twBgOpacity: 1,
            backgroundColor: theme('colors.gray.800'),
            paddingTop: '0.5rem',
            paddingBottom: '1rem',
            twTextOpacity: 1,
            color: 'white',
            borderRadius: '10px',
        },
        '.code-dot': {
            position: 'relative',
            padding: '4px',
            marginLeft: '8px',
            marginTop: '4px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: theme('colors.gray.600'),
        },
        '.code-line': {
            position: 'relative',
            backgroundColor: theme('colors.gray.700'),
            width: '100%',
            paddingBottom: '12px',
            paddingTop: '4px',
            FontFace: 'Roboto Mono',
        }
    }

    /*
        * * Stat Cards
        TODO: provide layouts - verticaly and stacked for mobile, maybe add something like a divider
    */
    const stats = {
        '.stat-negative': {
            position: 'relative',
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme('colors.red.500'),
            padding: theme('spacing.2'),
            borderRadius: '8px',
            border: '2px solid rgba(185, 28, 28, 0.3)',
            boxShadow: '0 12px 20px 0 rgba(239, 68, 68, 0.5)',
        },
        '.stat-positive': {
            position: 'relative',
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme('colors.green.500'),
            padding: theme('spacing.2'),
            borderRadius: '8px',
            border: '2px solid rgba(22, 163, 74, 0.3)',
            boxShadow: '0 12px 20px 0 rgba(34, 197, 94, 0.5))',
        },
    }

    /*
        * * Overlays
        TODO: diffrent types
    */
   const overlays = {
        '.overlay': {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba( 255, 255, 255, 0.5 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 2.5px )',
            webkitBackdropFilter: 'blur( 2.5px )',
        },
   }

   /*
        * * Mobile Menus
        TODO: diffrent types
    */
   const mobileMenus = {
        '.mobile-menu': {
            position: 'fixed',
            width: '100%',
            height: '100%',
            bottom: 0,
            left: 0,
            background: 'rgba( 255, 255, 255, 0.45 )',
            boxShadow: '0 12px 32px 0 rgba(35, 33, 81, 0.25)',
            backdropFilter: 'blur( 1.5px )',
            webkitBackdropFilter: 'blur( 1.5px )',
            borderRadiusBottom: '10px',
            borderTop: '2px solid rgba( 255, 255, 255, 0.20 )',
        },
   }

   /*
        * * Gradient Backgrounds
        TODO: more types
    */
        const backgrounds = {
            '.bg-1': {
                color: 'white',
                backgroundColor: '#21D4FD',
                backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
                backgroundSize: '100% 200vh',
                backgroundRepeat: 'repeat-y',
                height: '100%',
            },
            '.bg-2': {
                color: 'white',
                background: '-webkit-linear-gradient(to right, #0b8793, #360033)',
                background: 'linear-gradient(to right, #0b8793, #360033)',
                backgroundSize: '100% 200vh',
                backgroundRepeat: 'repeat-y',
                height: '100%',
            },
            '.bg-3': {
                color: 'white',
                backgroundImage: 'radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )',
                backgroundSize: '100% 200vh',
                backgroundRepeat: 'repeat-y',
                height: '100%',
            },
            '.bg-4': {
                color: 'white',
                backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% )',
                backgroundSize: '100% 200vh',
                backgroundRepeat: 'repeat-y',
                height: '100%',
            },
            '.bg-5': {
                color: 'white',
                backgroundImage: 'radial-gradient( circle farthest-corner at 32.7% 82.7%,  rgba(173,0,171,1) 8.3%, rgba(15,51,92,1) 79.4% )',
                backgroundSize: '100% 200vh',
                backgroundRepeat: 'repeat-y',
                height: '100%',
            },
    
        }

    addComponents(buttons)
    addComponents(cards)
    addComponents(inputs)
    addComponents(checkboxes)
    addComponents(header)
    addComponents(code)
    addComponents(stats)
    addComponents(overlays)
    addComponents(mobileMenus)
    addComponents(backgrounds)
    addComponents(selects)
}
)