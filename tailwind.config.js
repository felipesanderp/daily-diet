/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        loginPage: '600px 1fr',
        registerPage: '1fr 600px',
        defaultLayout: '250px 1fr',
      },
    },
  },
  // plugins: [require('tailwindcss-animate')],
}