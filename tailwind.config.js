/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          darkest: '#050811',
          darker: '#090d16',
          dark: '#0e1526',
          card: '#11192e',
          surface: '#16203b',
          border: '#1f2c4d',
          borderGlow: '#00e5ff33',
          neonCyan: '#00f0ff',
          neonGreen: '#00ff88',
          neonAmber: '#ffaa00',
          neonPurple: '#a855f7',
          neonPink: '#ff007f',
          textMuted: '#64748b',
          textBright: '#e2e8f0',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        'neon-cyan': '0 0 20px -2px rgba(0, 240, 255, 0.35), 0 0 6px -1px rgba(0, 240, 255, 0.4)',
        'neon-green': '0 0 20px -2px rgba(0, 255, 136, 0.35), 0 0 6px -1px rgba(0, 255, 136, 0.4)',
        'neon-amber': '0 0 20px -2px rgba(255, 170, 0, 0.35), 0 0 6px -1px rgba(255, 170, 0, 0.4)',
        'cyber-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}

