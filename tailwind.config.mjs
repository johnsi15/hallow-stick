/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#167DB7',
      },
      backgroundImage: {
        'hero-halloween': 'url(/hero-halloween.webp)',
      },
    },
  },
  plugins: [],
}
