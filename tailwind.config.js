const TaiwindCSSTheming = require("tailwindcss-theming");

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", '"Segoe UI"']
      }
    }
  },
  variants: {
    typography: ['responsive'],
    textColor: ["hover", "dark", "light"],
    backgroundColor: ["hover", "dark", "light"]
  },
  plugins: [
    require('@tailwindcss/typography'),
    TaiwindCSSTheming({
      variants: {
        dark: true,
        light: true
      }
    })
  ],
}
