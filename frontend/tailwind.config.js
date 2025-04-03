/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d3748',
          hover: '#3182ce',
          active: '#2b6cb0',
          focus: '#4299e1',
        },
        secondary: {
          DEFAULT: '#4299e1',
          hover: '#3182ce',
          active: '#2b6cb0',
          focus: '#4299e1',
        },
        accent: {
          DEFAULT: '#48bb78',
          hover: '#38a169',
          active: '#2f855a',
          focus: '#48bb78',
        },
        background: {
          DEFAULT: '#f7fafc',
          light: '#edf2f7',
          dark: '#cbd5e0',
        },
        text: {
          primary: '#2d3748',
          secondary: '#718096',
          muted: '#a0aec0',
        },
        border: {
          primary: '#e2e8f0',
          secondary: '#cbd5e0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'light': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'dark': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
