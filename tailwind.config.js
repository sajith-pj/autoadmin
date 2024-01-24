/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D5FEF",
        text_color: "#05004E",
        sub_text: "#737791",
        secondary_btn: "#EDEDED",
        primary_btn: "#5D5FEF",
        secondary_text: "#000000",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
