import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      screens: {
        '1.5xl': '1380px',
        'print': {'raw': 'print'}
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white2: {
          40: 'rgba(255, 255, 255, 0.04)',
          80: 'rgba(255, 255, 255, .08)',
        },
        blue2: {
          900: 'var(--clr-blue-900)',
        },
        team: {
          unknown: 'var(--color-team-unknown)',
          current: 'var(--color-team-current)',
          yellow: 'var(--color-team-yellow)',
          blue: 'var(--color-team-blue)',
          red: 'var(--color-team-red)',
        },
      },
      fontFamily: {
        garamond: ['EB Garamond', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        shake: 'shake 0.5s ease-in-out both',
      },
    },
  },
  plugins: [],
};
export default config;
