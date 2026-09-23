/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefdf6',
          100: '#d6f9e8',
          200: '#b0f0d3',
          300: '#7ce2b8',
          400: '#43cd98',
          500: '#1fb47e',
          600: '#149267',
          700: '#137554',
          800: '#135d45',
          900: '#124c3a',
        },
        sky: {
          50: '#eff8ff',
          500: '#3b93e8',
          600: '#2775c9',
        },
      },
      borderRadius: {
        xl2: '20px',
      },
      boxShadow: {
        soft: '0 2px 18px rgba(20, 40, 40, 0.06)',
        softer: '0 1px 8px rgba(20, 40, 40, 0.05)',
      },
      fontFamily: {
        sans: ['"Manrope"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pop: { '0%': { transform: 'scale(0.9)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        bob: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        slideUp: { '0%': { transform: 'translateY(12px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
      animation: {
        pop: 'pop 0.2s ease-out',
        bob: 'bob 3s ease-in-out infinite',
        slideUp: 'slideUp 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
