/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Doppio One', ...defaultTheme.fontFamily.sans],
        serif: ['Spooky Monster', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: '#167DB7',
        'blue-zodiac': {
          50: '#ecf9ff',
          100: '#d4f0ff',
          200: '#b2e6ff',
          300: '#7dd8ff',
          400: '#41bfff',
          500: '#159dff',
          600: '#007bff',
          700: '#0063fe',
          800: '#0050cd',
          900: '#0846a0',
          950: '#092552',
        },
        bunker: {
          50: '#f1f3fe',
          100: '#e3e7fb',
          200: '#c0ccf7',
          300: '#88a2f1',
          400: '#4872e8',
          500: '#2150d6',
          600: '#1338b6',
          700: '#102c94',
          800: '#12297a',
          900: '#142466',
          950: '#03050f',
        },
      },
      backgroundImage: {
        'hero-halloween': 'url(/hero-halloween.webp)',
        'custom-gradient': 'linear-gradient(180deg, hsl(0deg 0% 0.78%) 0%, hsla(217, 80%, 18%, 1) 100%)',
      },
      filter: {
        'custom-filter':
          'progid:DXImageTransform.Microsoft.gradient(startColorstr="#03050F", endColorstr="#092552", GradientType=1)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
