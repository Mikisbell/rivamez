/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        rivamez: {
          navy: '#1E3A8A',      // Azul navy del logo
          cyan: '#06B6D4',      // Azul cyan/celeste del logo
          green: '#059669',     // Verde del logo
          dark: '#0F172A',      // Azul muy oscuro para fondos
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
