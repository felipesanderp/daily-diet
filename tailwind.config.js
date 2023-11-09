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
        app: 'minmax(18rem, 20rem) 70rem',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
