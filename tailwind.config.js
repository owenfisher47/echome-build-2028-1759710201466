/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#8b5cf6',
        'cyber-pink': '#ec4899',
        'neon-green': '#00ff88',
        'dark-bg': '#0a0a0f',
        'card-bg': '#1a1a2e',
      },
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #00d4ff' },
          '100%': { boxShadow: '0 0 30px #00d4ff, 0 0 40px #00d4ff' },
        }
      }
    },
  },
  plugins: [],
}