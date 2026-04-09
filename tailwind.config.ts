import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#07111F',
          900: '#07111F',
          800: '#0D1A2D',
          700: '#13233B',
        },
        blue: {
          DEFAULT: '#1E5BD0',
          600: '#1E5BD0',
          500: '#3B74E8',
          400: '#6B9AF0',
        },
        offwhite: {
          DEFAULT: '#F7F8FA',
          100: '#F7F8FA',
          200: '#EEF0F4',
        },
        gray: {
          text: '#667085',
          400: '#98A2B3',
          300: '#D0D5DD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config