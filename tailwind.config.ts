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
        cream: '#FAEDCA',
        'cream-dark': '#F0DCA8',
        'cream-deeper': '#E8CF90',
        indigo: {
          DEFAULT: '#6C7DE2',
          light: '#EEF0FC',
          dark: '#4A5BC4',
        },
        terra: {
          DEFAULT: '#E18F64',
          light: '#FAE8DC',
          dark: '#C46F44',
        },
        ink: '#2B2D42',
        muted: '#7A7D95',
        white: '#FFFDF7',
        grey: {
          DEFAULT: '#D0D0D0',
          border: '#BEBEBE',
        },
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
        card: '16px',
        pill: '50px',
      },
      maxWidth: {
        site: '1400px',
      },
    },
  },
  plugins: [],
}

export default config
