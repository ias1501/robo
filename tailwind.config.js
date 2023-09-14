/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        sea1: 'url("https://wallpapershome.com/images/pages/pic_h/386.jpg")',
        sea3: 'url("https://images.nightcafe.studio/jobs/PJZmzNaNW3fnMrLWVM1C/PJZmzNaNW3fnMrLWVM1C--1--6qfex.jpg?tr=w-1600,c-at_max")',
        sea2: 'url("https://assets.newatlas.com/dims4/default/5e30e35/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F6e%2F77%2F638536314eacbb6680c7ef91a502%2Fteleportal-alvin-robot-4-of-8.jpeg")',
        signup:
          'url("https://media.istockphoto.com/id/1152237432/photo/underwater-scene-tropical-seabed-with-reef-and-sunshine.jpg?s=612x612&w=0&k=20&c=qAe3eZ_bwmrq6CW5IoddV2icSDKsO7vkbQKwqy3ma0o=")',
        dashboard:
          'url("https://c4.wallpaperflare.com/wallpaper/533/274/437/water-4k-best-high-resolution-wallpaper-preview.jpg")',
        contactus:
          'url("https://img.freepik.com/premium-vector/girl-turns-support-service-customer-service-conceptcontact-usonline-helpline_369728-26.jpg")',
        
        sea4: 'url("https://images.unsplash.com/photo-1499452535738-b35ed31e39d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxODYxOTg4fHxlbnwwfHx8fHw%3D&w=1000&q=80")',
        dashboard: 'url("/assets/dashboard.png")',
      },
      
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      }
    }

  },
  plugins: [rotateY],
}
// const forms = require('@tailwindcss/forms');

// module.exports = {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'media',
//   plugins: [forms],
// };
