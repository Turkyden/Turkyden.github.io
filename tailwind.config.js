module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          maxWidth: '80ch',
          color: theme('colors.gray.300'),
          a: {
            color: theme('colors.orange.500'),
            '&:hover': {
              color: theme('colors.orange.500'),
            },
          },
          blockquote: {
            color: theme('colors.gray.300'),
            borderLeftColor: theme('colors.orange.500'),
          },
          'ol > li::before': {
            color: theme('colors.orange.500'),
          },
          strong: {
            color: theme('colors.orange.500'),
          },
          code: {
            color: theme('colors.orange.500'),
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
