/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sw: ["Star Wars"],
    },
  },
};
export const plugins = [
  require("tailwindcss/plugin")(({ addVariant }) => {
    addVariant("search-cancel", "&::-webkit-search-cancel-button");
  }),
  plugin(function ({ addBase }) {
    addBase({
      '[type="search"]::-webkit-search-cancel-button': {
        cursor: "pointer",
        backgroundImage:
          "url('https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg')",
        backgroundColor: "#64676e",
        borderRadius: "25px",
        border: "1px gray solid ",
      },
    });
  }),
];
