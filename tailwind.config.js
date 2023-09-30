// const { url } = require('inspector');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [  "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   "./components/**/*.{js,ts,jsx,tsx,mdx}",

//   // Or if using `src` directory:
//   "./src/**/*.{js,ts,jsx,tsx,mdx}",],
//   darkMode: false,
//   theme: {
//     extend: {
//       backgroundImage: {
//         // 'hero-pattern': "url('/img/hero-pattern.svg')",
//         // 'footer-texture': "url('/img/footer-texture.png')",
//         'sea1': 'url("/sea1.png")',
//         'sea3':'url("https://free4kwallpapers.com/uploads/wallpaper/ocean-fish-wallpaper-1280x720-wallpaper.jpg")',
//         'sea2':'url("/sea2.png")',
//         'signup':'url("https://media.istockphoto.com/id/1152237432/photo/underwater-scene-tropical-seabed-with-reef-and-sunshine.jpg?s=612x612&w=0&k=20&c=qAe3eZ_bwmrq6CW5IoddV2icSDKsO7vkbQKwqy3ma0o=")',
//         'dashboard':'url("https://c4.wallpaperflare.com/wallpaper/533/274/437/water-4k-best-high-resolution-wallpaper-preview.jpg")',
//         'contactus':'url("https://img.freepik.com/premium-vector/girl-turns-support-service-customer-service-conceptcontact-usonline-helpline_369728-26.jpg")',
//         'sea4':'url("https://images.unsplash.com/photo-1499452535738-b35ed31e39d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxODYxOTg4fHxlbnwwfHx8fHw%3D&w=1000&q=80")',
//         'aboutus':'url("https://wallpapers.com/images/hd/blue-water-background-cxt95up4l9fh7qtr.jpg")'
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
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
      fontFamily:{
        "wendy-one":['Wendy One', 'sans-serif'],
        "montserrat":['Montserrat','sans-serif']
      },
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        sea1: 'url("https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")',
        sea3: 'url("https://images.unsplash.com/photo-1482531007909-192ac913980a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGVyJTIwaGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60")',
        sea2: 'url("https://assets.newatlas.com/dims4/default/5e30e35/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F6e%2F77%2F638536314eacbb6680c7ef91a502%2Fteleportal-alvin-robot-4-of-8.jpeg")',
        signup:
          'url("https://media.istockphoto.com/id/1152237432/photo/underwater-scene-tropical-seabed-with-reef-and-sunshine.jpg?s=612x612&w=0&k=20&c=qAe3eZ_bwmrq6CW5IoddV2icSDKsO7vkbQKwqy3ma0o=")',
        dashboard:
          'url("/main.png")',
        contactus:
          'url("/contactuss.png")',
        sea4: 'url("https://images.unsplash.com/photo-1499452535738-b35ed31e39d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxODYxOTg4fHxlbnwwfHx8fHw%3D&w=1000&q=80")',
        Lifi: 'url("https://media.istockphoto.com/id/1585551839/photo/li-fi-w-lan-internet-and-network-technology-enable-high-speed-li-fi-connections.webp?b=1&s=170667a&w=0&k=20&c=ValsNHHKcdyHykU_q6g0f0dVFqoS0nZFutlC8k8Hhsw=")',
        rov1: 'url("/assets/rov1.jpg")',
        rov2: 'url("https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1Ym1hcmluZXMlMjBzbWFsbCUyMHVuZGVyd2F0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60")',
        rov3: 'url("https://media.istockphoto.com/id/1499815056/photo/a-tourist-submarine-has-gone-missing-in-the-north-atlantic-mini-manned-submarine-to-explore.webp?b=1&s=170667a&w=0&k=20&c=aOFE0Ib9CQFwbmg47D3nwbfgnxwY3nHqvHl7wrH0NPE=")',
        cs: 'url("https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZWdyYXRlZCUyMGNvbnRyb2wlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60")',
        ls: 'url("https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2ZSUyMHZlZGlvJTIwc3RyZWFtaW5nJTIwb2YlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60")',
        dm: 'url("/i1.png")',
        dl: 'url("/dm.png")',
        galery: 'url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdhdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")',
      },

      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#6CB4EE",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "A427DF#",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    }
  },
  plugins: [rotateY],
};
// const forms = require('@tailwindcss/forms');

// module.exports = {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'media',
//   plugins: [forms],
// };