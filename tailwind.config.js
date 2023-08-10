/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'sea1': 'url("https://wallpapershome.com/images/pages/pic_h/386.jpg")',
        'sea3':'url("https://free4kwallpapers.com/uploads/wallpaper/ocean-fish-wallpaper-1280x720-wallpaper.jpg")',
        'sea2':'url("https://assets.newatlas.com/dims4/default/5e30e35/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F6e%2F77%2F638536314eacbb6680c7ef91a502%2Fteleportal-alvin-robot-4-of-8.jpeg")',  
      }
    },
  },
  plugins: [],
}
const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  plugins: [forms],
};