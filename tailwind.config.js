/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1924",
        chatPrimary: "#633BBC",
        chatSecondary: "#07847E",
        boxInput: "#1E1E1E",
        status: "#00B37E",
      },
      fontFamily: {
        default: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
