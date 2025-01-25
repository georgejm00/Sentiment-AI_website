/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#7c7c7c",
          "200": "#202020",
          "300": "#1e1e1e",
          "400": "#1d1d1d",
          "500": "#1a1a1a",
          "600": "rgba(132, 131, 134, 0.6)",
          "700": "rgba(255, 255, 255, 0.6)",
          "800": "rgba(255, 255, 255, 0.7)",
          "900": "rgba(255, 255, 255, 0.8)",
        },
        white: "#fff",
        gainsboro: "rgba(217, 217, 217, 0.2)",
        firebrick: "#c43b16",
        coral: {
          "100": "#f5775a",
          "200": "rgba(245, 119, 90, 0.6)",
        },
        darkseagreen: "#78c38e",
        darkgray: "#9e9e9e",
        dimgray: "#545454",
        indianred: {
          "100": "rgba(212, 69, 89, 0.4)",
          "200": "rgba(236, 94, 115, 0.4)",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        quicksand: "Quicksand",
      },
      borderRadius: {
        "999981xl": "1000000px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "5xs": "8px",
      xs: "12px",
      "7xs": "6px",
      "5xl": "24px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
