module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      zs: ".55rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },

    fontFamily: {
      sans: ["Open Sans", "Arial", "sans-serif"],
      mono: ["SFMono-Regular", "Menlo"],
      display: ["Oswald"],
      body: ["Open Sans"],
    },

    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      auto: "auto",
    },

    extend: {
      colors: {
        primary: {
          light: "#ffb16f",
          main: "#fc8041",
          dark: "#c35112",
          contrastTextWhite: "#ffffff",
          contrastTextBlack: "#000000",
        },
        secondary: {
          light: "#9d8a75",
          main: "#6e5d49",
          dark: "#423421",
          contrastTextWhite: "#ffffff",
          contrastTextBlack: "#000000",
        },

        error: {
          light: "#bf334c",
          main: "#B00020",
          dark: "#7b0016",
          contrastText: "#000000",
        },
        warning: {
          light: "#ffee33",
          main: "#ffea00",
          dark: "#b2a300",
          contrastText: "#000000",
        },
        success: {
          light: "#91ff35",
          main: "#76ff03",
          dark: "#52b202",
          contrastText: "white",
        },
        common: {
          white: "#ffffff",
          black: "black",
        },
      },
    },
  },
};
