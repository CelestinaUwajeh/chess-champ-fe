/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "linear-gradient(180deg, #E00000 0%, #930000 80.41%)",
        "home-bg": `url("/home_hero_bg.png")`,
        "about-bg": `url("/about_hero_bg.png")`,
        "services-bg": `url("/services_hero_bg.png")`,
        "works-bg": `url("/works_hero_bg.png")`,
        "tutors-bg": `url("/tutors.png")`,
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        robo: ["Roboto", "sans-serif"],
      },
      colors: {
        main: "#930000",
        white: "#FFFFFF",
        black: "#010101",
        textBlack: "rgba(1, 1, 1, 0.8)",
        bgPink: "#FFF4F4",
        lightGrey: "rgba(233, 232, 232, 0.15)",
        footerGrey: "#E9E8E8",
      },
    },
  },
  plugins: [],
};
