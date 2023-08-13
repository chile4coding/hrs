/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "0px", max: "640px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "641px", max: "768px" },
      // md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "769px", max: "2000px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Mukta: "Mukta",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
