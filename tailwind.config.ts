import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        redefine: {
          background: '#f7f3eb',
          card: '#fffdf9',
          green: '#3f7f6f',
          orange: '#ea8b45',
          text: '#2e2a25',
        },
      },
      boxShadow: {
        card: '0 10px 30px rgba(70, 55, 39, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config
