/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#6c757d",
        grayDark: "#343a40",
        primary: "#3639AE",
        secondary: "#673BB7",
        success: "#10d876",
        info: "#2754e6",
        warning: "#FE9431",
        danger: "#E50202",
        light: "#F8F9FE",
        dark: "#262F5A",
        cases: "#E5E6F6",
        casesLight: "#ebebf7",
        casesHover: "#D0D0EC",
        tableHover: "#E1E1F3",
        textBlue: "#515184",
        strongGray: "#0000001a",
        darkBlue: "#0c0c0d",
        steel: "#888888",
        lightRed: "#fff2f2",
        navyBlue: "#1a1662",
        whisper: "#eee",
        brightRed: "#ff0000",
        brightOrange: "#ff6a07",
        brightGreen: "#82c519",
        lightOrange: "#fff9f1",
        lightGreen: "#edffec",
        lightBlue: "#eefbff",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        poppins: 'Poppins',
        roboto: 'Roboto',
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
        poppins: ["Poppins"],
      },
      mediaQueries: {
        breakpointXs: "0",
        breakpointSm: "576px",
        breakpointMd: "768px",
        breakpointLg: "992px",
        breakpointXl: "1200px",
        breakpointXxl: "1440",
      },
      boxShadow: {
        md: "0px 1px 10px rgba(0, 0, 0, 0.06)",
      },
      lineHeight: {
        100: "5.5rem",
      },
      flex: {
        auto: "auto",
      },
    },
    animation: {
      spinner: "spinner 5s infinite linear",
    },
    keyframes: {
      spinner: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(359deg)",
        },
      },
    },
    plugins: [],
  },
};
