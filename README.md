This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
<div
        ref={visionRef}
        className={`text-gray-600 pr-10 p-4 md:text-right  ${fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[1rem]'} transition-opacity transform ease-in-out duration-500`}
        style={{ width: '100%', maxWidth: '100%', transition: 'width 0.5s ease-in-out' }}
      >
        <h2 className="flex text-2xl font-bold">Our Vision</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
  {/* Card 1 */}
  <div className=" p-5 rounded-lg shadow-md text-left" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Innovative ROV Solutions </div>
    <div className="text-xs leading-tight">Develop state-of-the-art remotely operated vehicles (ROVs) equipped with advanced sensors and communication systems to enable safe and efficient exploration of underwater environments.</div>
  </div>

  {/* Repeat the structure for the remaining cards */}
  
  {/* Card 2 */}
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Environmental Conservation</div>
    <div className="text-xs leading-tight"> Utilize our technology to support scientific research, conservation efforts, and sustainable practices in ocean and freshwater ecosystems.</div>
  </div>

  {/* Card 3 */}
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Education and Outreach</div>
    <div className="text-xs leading-tight">Foster a deeper connection between people and the underwater world by providing educational resources and engaging the public in underwater exploration.</div>
  </div>
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Industry Collaboration</div>
    <div className="text-xs leading-tight">Collaborate with industries such as marine biology, offshore energy, and underwater archaeology to provide ROV solutions that meet their specific needs.</div>
  </div>
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Safety and Efficiency</div>
    <div className="text-xs leading-tight">Prioritize the safety of our equipment and operators while maximizing the efficiency of underwater missions.</div>
  </div>
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Global Impact </div>
    <div className="text-xs leading-tight">Extend our reach to contribute to international efforts to preserve and protect the world's oceans and freshwater bodies.</div>
  </div>
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Inclusive Exploration </div>
    <div className="text-xs leading-tight">Promote diversity and inclusion in the field of underwater exploration, ensuring that all voices and perspectives are heard..</div>
  </div>
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Continuous Innovation</div>
    <div className="text-xs leading-tight">Stay at the forefront of ROV technology through ongoing research and development, adapting to emerging challenges and opportunities in underwater exploration.</div>
  </div>
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Economic Growth</div>
    <div className="text-xs leading-tight">Drive economic growth by providing ROV services and solutions that benefit industries and research organizations worldwide.</div>
  </div>
  <div className=" p-4 rounded-lg shadow-md text-center" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
    <div className="font-bold text-sm mb-2">Customer Satisfaction </div>
    <div className="text-xs leading-tight">Deliver exceptional value and service to our customers, exceeding their expectations in every aspect of our work.</div>
  </div>

  {/* Continue with the remaining cards */}
</div>
