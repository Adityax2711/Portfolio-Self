/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C0C0C',
        surface: {
          DEFAULT: '#141414',
          subtle: '#181818',
          hover: '#1f1f1f',
        },
        border: {
          DEFAULT: '#242424',
          light: '#333333',
          glow: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, #9333ea 0%, #db2777 50%, #ea580c 100%)',
      }
    },
  },
  plugins: [],
}
