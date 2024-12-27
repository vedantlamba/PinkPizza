/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", 'serif'],
        MrsSaint: ["Mrs Saint Delafield", 'serif'],
        EduVIC: ["Edu VIC WA NT Beginner", 'serif']

      },
      colors:{
        primary: {
          soft: '#F6F5F2',
          light: '#F0EBE3',
          meduim: '#F3D0D7', 
          dark: '#FFEFEF',
        },
        secondary: {
          soft: '#F5EEE6',
          light: '#FFF8E3',
          meduim: '#F3D7CA',
          dark: '#E6A4B4',
        },
      }
    },
    screens: {
      sm: '640px', // Tailwind's default for small screens
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}