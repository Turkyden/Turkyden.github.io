module.exports = {
  purge: [],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          maxWidth: '80ch',
          color: theme('colors.gray.100'),
          a: {
            color: theme('colors.green.400'),
            '&:hover': {
              color: theme('colors.green.400'),
            },
          },
          blockquote: {
            color: theme('colors.gray.500'),
          },
          strong: {
            color: theme('colors.green.400'),
          },
          code: {
            color: theme('colors.green.400'),
          },
          'code::before': {
            content: '',
          },
          'code::after': {
            content: '',
          },
          h1: {
            color: theme('colors.gray.100')
          },
          h2: {
            color: theme('colors.gray.100')
          },
          h3: {
            color: theme('colors.gray.100')
          },
          h4: {
            color: theme('colors.gray.100')
          },
          // ...
        }
      }
    })
  },
  variants: {
    typography: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
