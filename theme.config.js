const { Theme, ThemeManager } = require("tailwindcss-theming/api");

const base = new Theme()
  .setName("light")
  .targetable()
  .addColors({
    primary: "#ffffff",
    secondary: "#ED8936",
    "primary-hover": "e0e0e0",
    "on-primary": "#151515"
  })
  // Primary icon variants
  .addColorVariant("light", "#b27a21", "on-primary") // The light icon
  .addColorVariant("dark", "#6b41c0", "on-primary") // The dark icon
  .addColorVariant("system", "#4b5568", "on-primary") // The system icon
  .addColorVariant("light", "#f8f18b", "primary-hover") // The light icon background
  .addColorVariant("dark", "#d5bbf9", "primary-hover") // The dark icon background
  .addColorVariant("system", "#e3e8f0", "primary-hover") // The system icon background

  // Primary states
  .addColorVariant("focus", "#e2e2e2", "primary");

const dark = new Theme()
  .setName("dark")
  .targetable()
  .addColors({
    primary: "#151515",
    secondary: "#ED8936",
    "primary-hover": "e0e0e0",
    "on-primary": "#a1a7b3"
  })
  // Primary icon variants
  .addColorVariant("light", "#f8f18b", "on-primary") // The light icon
  .addColorVariant("dark", "#d5bbf9", "on-primary") // The dark icon
  .addColorVariant("system", "#e3e8f0", "on-primary") // The system icon
  .addColorVariant("light", "#313131", "primary-hover") // The light icon background
  .addColorVariant("dark", "#313131", "primary-hover") // The dark icon background
  .addColorVariant("system", "#313131", "primary-hover") // The system icon background

  // Primary states
  .addColorVariant("focus", "#343434", "primary");

module.exports = new ThemeManager()
  .setDefaultTheme(base)
  .setDefaultDarkTheme(dark);
