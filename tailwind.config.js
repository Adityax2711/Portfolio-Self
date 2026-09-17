/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#060a14',
        surface: {
          DEFAULT: '#0d1520',
          subtle: '#111b2a',
          hover: '#162236',
        },
        border: {
          DEFAULT: '#1a2744',
          light: '#243555',
          glow: 'rgba(255, 255, 255, 0.1)',
        },
        neon: {
          cyan: '#38bdf8',
          purple: '#a855f7',
          pink: '#ec4899',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, #9333ea 0%, #db2777 50%, #ea580c 100%)',
        'futuristic-gradient': 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #38bdf8 100%)',
      },
    },
  },
  plugins: [],
}
