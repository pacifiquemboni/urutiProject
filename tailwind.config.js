/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        foreground: "#000000",
        background: "#ffffff",
        secondary: "#fffff",
        primary: "#FF9671",
        "dark-primary": "#38005a",
        primary2: "#003232",
        grey: "#888888",
        "light-grey": "#dedede",
        "dark-grey": "#535353",
        error: "#ff0000",
      },
      backgroundImage: {
        'purple-black-gradient': 'linear-gradient(90deg, #6A1B9A, #000000)',
        'black-gradient': 'linear-gradient(90deg,#19232c,#FF9671);',
        'green-gradient': 'linear-gradient(90deg,#44be4c,#44be00);',
        
        

        'orange-gradient': 'radial-gradient(closest-side, #ff9771, #ff9771, #ff9771,#ff9771, #ab3e16,#bf4215,#75280c)',
        'orange-bg-gradient': 'radial-gradient(closest-side, #ff9771, #ab3e16)',




      },
      height: {
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        '100': '100',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
