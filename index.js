module.exports = {
    theme: {
        extend: {
        backgroundColor: {
            'red-500': '#ff0000',
        },
        },
        button: {
        // Define your custom button styles here
        'red': '#ff0000',
        'blue': '#0000ff',
        'green': '#00ff00',
        'gray': '#cccccc',
        },
    },
    variants: {
        // Add your custom variants here
    },
    plugins: [
        function({ addComponents, theme }) {
        const buttons = {
            '.btn': {
            display: 'inline-block',
            fontWeight: 'bold',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            userSelect: 'none',
            border: '1px solid transparent',
            padding: '.375rem .75rem',
            fontSize: '1rem',
            lineHeight: '1.5',
            borderRadius: '.25rem',
            transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
            '&:disabled': {
                opacity: '.65',
            },
            },
            '.btn-red': {
            backgroundColor: theme('button.red'),
            color: '#ffffff',
            },
            '.btn-blue': {
            backgroundColor: theme('button.blue'),
            color: '#ffffff',
            },
            '.btn-green': {
            backgroundColor: theme('button.green'),
            color: '#ffffff',
            },
            '.btn-gray': {
            backgroundColor: theme('button.gray'),
            color: '#ffffff',
            },
        };

        addComponents(buttons);
        },
    ],
}