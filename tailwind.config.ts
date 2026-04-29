import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#00ABA8',
          50: '#E6F7F7',
          100: '#CCEFEF',
          200: '#99DFDE',
          300: '#66CFCD',
          400: '#33BFBD',
          500: '#00ABA8',
          600: '#008A87',
          700: '#006866',
          800: '#004645',
          900: '#002423',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          light: '#4A4A4A',
        },
      },
    },
  },
  plugins: [],
}
export default config
