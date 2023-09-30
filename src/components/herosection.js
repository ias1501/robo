// // pages/index.js
// "use client"
// import { useState, useEffect } from 'react';
// import Submarine from '../components/components/submarine';
// import NavBar from '@/components/components/Navbar';
// // import Hero from '@/components/components/Herosection';
// import HeroSection from '@/components/components/Herosection';
// import Footer from '@/components/components/Footer';
// export default function Home() {

//   return (
//     <div>
//       <NavBar/>

//       <HeroSection/>
//     <Footer/>
//     </div>
//   );
// }
// "use client"
// import React, { useEffect } from 'react';
// import '../styles/globals.css'; // Make sure to adjust the path to your CSS file
// import logo from '../../public/SAVE_20230909_205709-removebg-preview.png';
// import BackgroundVideo from '../components/components/Backgroundvedio';
// import Image from 'next/image';
// import NavBar from '@/components/components/Navbar';
// function Hero2() {
//   // Function to handle the scroll event for changing the navbar style
//   function handleScroll() {
//     const navbar = document.querySelector('header');
//     if (window.scrollY > 100) {
//       navbar.classList.add('bg-color-primary-dark');
//       navbar.classList.add('border-b');
//       navbar.classList.add('border-color-gray');
//     } else {
//       navbar.classList.remove('bg-color-primary-dark');
//       navbar.classList.remove('border-b');
//       navbar.classList.remove('border-color-gray');
//     }
//   }

//   // Function to toggle the mobile menu
//   function toggleMobileMenu() {
//     const menu = document.querySelector('#menu');
//     const faSolid = document.querySelector(".fa-solid");

//     menu.classList.toggle('hidden');
//     faSolid.classList.toggle('fa-xmark');
//   }

//   // Function to show user reviews
//   function showReview(event) {
//     const userTexts = document.getElementsByClassName('user-text');
//     const userPics = document.getElementsByClassName('user-pic');

//     for (const userPic of userPics) {
//       userPic.classList.remove("active-pic");
//     }
//     for (const userText of userTexts) {
//       userText.classList.remove("active-text");
//     }
//     let i = Array.from(userPics).indexOf(event.target);
//     userPics[i].classList.add('active-pic');
//     userTexts[i].classList.add('active-text');
//   }

//   // Function to toggle card rotation
//   function toggleCardRotation() {
//     const card_1_front = document.querySelector("#card_1_front");
//     const card_1_back = document.querySelector("#card_1_back");
//     const card_2_front = document.querySelector("#card_2_front");
//     const card_2_back = document.querySelector("#card_2_back");
//     const card_3_front = document.querySelector("#card_3_front");
//     const card_3_back = document.querySelector("#card_3_back");

//     card_1_front.classList.toggle('-rotate-y-180');
//     card_1_back.classList.toggle('rotate-y-180');
//     card_2_front.classList.toggle('-rotate-y-180');
//     card_2_back.classList.toggle('rotate-y-180');
//     card_3_front.classList.toggle('-rotate-y-180');
//     card_3_back.classList.toggle('rotate-y-180');
//   }

//   useEffect(() => {
//     // Attach event listeners when the component mounts
//     handleScroll(); // Call handleScroll initially
//     window.addEventListener('scroll', handleScroll);
//     toggleCardRotation();
//     window.addEventListener('click', toggleCardRotation);

//     // Clean up event listeners when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       // Remove other event listeners if necessary
//     };
//   }, []);

//   return (
//     <div className='bg-color-primary text-color-white'>

//       <title>WanderSub</title>
//       <link rel="stylesheet" href="css/main.css" />
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
//         integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
//         crossOrigin="anonymous"
//         referrerPolicy="no-referrer"
//       />
//       <header className="sticky top-0 z-50">
//        <NavBar/>
//       </header>
//       <main>
//         <section id="home" className="relative">

//           <div className="blob1" />
//           <div className="blob2" />
//           <div className="container py-20">
//             <div className="flex flex-col items-center z-20 md:flex-row">
//               <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
//                 <h1 className="title mb-4">Awesome App for Your Financial.</h1>
//                 <p className="leading-relaxed mb-10">
//                   This should be used to tell a story and let your users know a
//                   little more about app and its use, How can benefit them.
//                 </p>
//                 <button className="btn">Download app</button>
//               </div>
//               <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
//               <Image
//               src={logo}
//               alt="Logo"
//               width="500"
//               height="500"
//               className="cursor-pointer"
//               priority
//               />
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="features" className="bg-color-primary-light">
//           <div className="container py-20">
//             <div className="text-center m-auto mb-20 md:w-1/2">
//               <h4 className="font-bold text-color-secondary mb-4">Our Future</h4>
//               <h1 className="title">Easy To Manage Your All Payments By Our App</h1>
//             </div>
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
//               {/* card no 1 */}
//               <div id='toggleBtn' className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200" onClick={toggleCardRotation}>
//                 <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
//                   <i className="fa-solid fa-calendar-days text-4xl" />
//                 </div>
//                 <h3 className="text-xl font-bold py-4">Expense Tracking</h3>
//                 <p className="leading-relaxed">
//                   We use an application designed for testing and to keep track.
//                 </p>
//               </div>
//               {/* card no 2 */}
//               <div id='toggleBtn' className="bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer" onClick={toggleCardRotation}>
//                 <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
//                   <i className="fa-solid fa-chart-column text-4xl" />
//                 </div>
//                 <h3 className="text-xl font-bold py-4">Finance Snapshot</h3>
//                 <p className="leading-relaxed">
//                   We use an application designed for testing and to keep track.
//                 </p>
//               </div>
//               {/* card no 3 */}
//               <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
//                 <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
//                   <i className="fa-solid fa-phone text-4xl" />
//                 </div>
//                 <h3 className="text-xl font-bold py-4">Support 24/24</h3>
//                 <p className="leading-relaxed">
//                   We use an application designed for testing and to keep track.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Add more sections here */}
//         <section id="pricing" class="bg-color-primary-light">
//             <div class="container py-20">
//                 <div class="text-center m-auto mb-20 md:w-1/2">

//                     <h1 class="title">Features</h1>
//                     {/* <!-- Rounded switch  --> */}

//                 </div>
//                 <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//                     {/* <!-- card 1 --> */}
//                     <div class="card relative h-auto w-auto">
//                         {/* <!-- front side  --> */}
//                         <div id="card_1_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">

//                         </div>
//                         {/* <!-- back side  --> */}
//                         <div id="card_1_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">

//                         </div>
//                     </div>
//                     {/* <!-- card 2 --> */}
//                     <div class="card relative h-auto w-auto">
//                         {/* <!-- front side  --> */}
//                         <div id="card_2_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">

//                         </div>
//                         {/* <!-- back side  --> */}
//                         <div id="card_2_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">

//                         </div>
//                     </div>
//                     {/* <!-- card 3 --> */}
//                     <div class="card relative h-auto w-auto">
//                         {/* <!-- front side  --> */}
//                         <div id="card_3_front" class="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full">
//                             <div class="relative">
//                                 <p class="text-6xl text-black pl-2 font-bold  before:absolute before:text-sm before:top-0 before:left-0">
//                                     Feature3
//                                 </p>
//                             </div>
//                             <div class="py-10">
//                                 <h3 class="text-xl font-bold pb-3">Basic</h3>
//                                 <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
//                             </div>
//                             <ul class="space-y-4 pb-10">
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-secondary"></i>
//                                     <span class="pl-4">Expense Management</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-secondary"></i>
//                                     <span class="pl-4">Card Management</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Instant Statistics</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Bookmark Function</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Accounting System</span>
//                                 </li>
//                             </ul>
//                             <button class="card_btn">Get Started</button>
//                         </div>
//                         {/* <!-- back side  --> */}
//                         <div id="card_3_back" class="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0">
//                             <div class="relative">
//                                 <p class="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
//                                     500<span class="text-sm font-normal tracking-widest">/per month</span>
//                                 </p>
//                             </div>
//                             <div class="py-10">
//                                 <h3 class="text-xl font-bold pb-3">Premium</h3>
//                                 <p class="leading-relaxed">For Beginner Who Want To Scale Business Globaly</p>
//                             </div>
//                             <ul class="space-y-4 pb-10">
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-secondary"></i>
//                                     <span class="pl-4">Expense Management</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-secondary"></i>
//                                     <span class="pl-4">Card Management</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Instant Statistics</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Bookmark Function</span>
//                                 </li>
//                                 <li>
//                                     <i class="fa-solid fa-bookmark text-color-gray"></i>
//                                     <span class="pl-4">Accounting System</span>
//                                 </li>
//                             </ul>
//                             <button class="card_btn">Get Started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//       </main>
//     </div>

//   );
// }

// export default Hero2;
"use client";
import React from "react";

import "./hero.css";
import NavBar from "@/components/Navbar";

import ProductComponent from "@/components/productcomponent2";
import ProductComponent1 from "@/components/productcomponent1";

const features =[
  {id:1,title:"High-Definition Live Imaging",desc:"Experience the depths like never before with a live HD camera and advanced lighting system, providing crystal-clear visuals for wired communication. Immerse yourself in the underwater world in real-time.",img:"/Live.png"},
  {id:2,title:"Precision Control with 5 Degrees of Freedom",desc:"Our ROV boasts 5 Degrees of Freedom (5-DoF) through a vectored thruster configuration, allowing precise maneuverability in every direction. Explore underwater environments with ease and agility",img:"/Precision.png"},
  {id:3,title:"Powerful Propulsion",desc:"Equipped with six high-performance 130W motors, each delivering 1.6 kg of thrust, our ROV ensures efficient propulsion and rapid response to your commands. Traverse currents and conquer underwater challenges effortlessly.",img:"/propulsion.png"},
  {id:4,title:"Modular Expandability",desc:"Designed with a modular frame, our ROV allows for easy customization and expandability. Adapt the system to meet your specific exploration needs and integrate additional sensors or equipment seamlessly.",img:"/i1.png"},
  {id:5,title:"Intuitive Controller Software",desc:"Our integrated controller software draws inspiration from industry-leading solutions like Ardusub, Ardupilot, and QGroundControl. Enjoy user-friendly interfaces and robust functionality for seamless operation.",img:"/CONTROLLER SOFTWARE.png"},
  {id:6,title:"Versatile Communication Options",desc:"Choose the communication method that suits your mission best. Whether it's Li-Fi for high-speed wireless tasks, UART for versatile connectivity, or Ethernet for extended reach and high data transfer rate, our ROV offers flexible communication solutions.",img:"/Versatile.png"},
  {id:7,title:"Object Mapping and Identification",desc:"Utilize advanced sensors, including an IMU and depth sensor, along with a barcode scanner, to map and identify underwater objects accurately. Enhance your research, inspection, and exploration capabilities.",img:"obj mapping.png"},
  {id:8,title:"Streamlined Design",desc:"Our ROV's streamlined frame minimizes drag, ensuring optimal maneuverability and efficiency. Glide through the water with grace and precision.",img:"/streamline2.png"}
]

const Hero3 = () => {
  return (
    <div className="text-color-white">
      <div className="bg-dm">
        <header className="sticky top-0 z-50">{/* <NavBar/> */}</header>
        <main>
          <section id="home" className="relative">
            <div className="container py-44">
              <div className="z-20 mt-9 flex flex-col items-center md:flex-row">
                <div className="mb-12 text-center md:w-1/2 md:pr-10 md:text-left">
                  <h1 className="title mb-4 mt-3 font-wendy-one">
                    “Explore the secrets of underwater world with WanderSub”
                  </h1>
                  <p className="mb-10 font-wendy-one leading-relaxed">
                    WanderSub is a state-of-the-art underwater remotely operated
                    vehicle (ROV)
                  </p>
                  <button className="btn">Explore Now</button>
                </div>
                <div className="mb-12 text-center md:w-1/2 md:pr-10 md:text-left"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100 font-montserrat text-black">
        <div className="flex flex-col w-full items-center p-8 pb-0  ">
        
          <h2 className="text-3xl font-bold text-center p-4 pb-3 ">Vision</h2>
          <div className="self-center">
          <p className="max-w-2xl text-black text-center  text-xl">
            "To unlock the mysteries of the world beneath the waves and empower
            humanity to explore, understand, and protect our planet's underwater
            realms through cutting-edge ROV technology."
          </p>
          </div>
          <h2 className="mt-2 pb-0 p-4 text-center text-3xl font-bold ">Mission</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 p-8 pt-6 ">
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Innovative ROV Solutions
              </div>
              <div className="text-md leading-tight">
                Develop state-of-the-art remotely operated vehicles (ROVs)
                equipped with advanced sensors and communication systems to
                enable safe and efficient exploration of underwater
                environments.
              </div>
            </div>

            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold">
                Environmental Conservation
              </div>
              <div className="text-md leading-tight">
               
                Utilize our technology to support scientific research,
                conservation efforts, and sustainable practices in ocean and
                freshwater ecosystems.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Education and Outreach
              </div>
              <div className="text-md leading-tight">
                Foster a deeper connection between people and the underwater
                world by providing educational resources and engaging the public
                in underwater exploration.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Industry Collaboration
              </div>
              <div className="text-md leading-tight">
                Collaborate with industries such as marine biology, offshore
                energy, and underwater archaeology to provide ROV solutions that
                meet their specific needs.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Safety and Efficiency
              </div>
              <div className="text-md leading-tight">
                Prioritize the safety of our equipment and operators while
                maximizing the efficiency of underwater missions.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">Global Impact</div>
              <div className="text-md leading-tight">
                Extend our reach to contribute to international efforts to
                preserve and protect the world's oceans and freshwater bodies.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Inclusive Exploration
              </div>
              <div className="text-md leading-tight">
                Promote diversity and inclusion in the field of underwater
                exploration, ensuring that all voices and perspectives are
                heard.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Continuous Innovation
              </div>
              <div className="text-md leading-tight">
                Stay at the forefront of ROV technology through ongoing research
                and development, adapting to emerging challenges and
                opportunities in underwater exploration.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4"
              style={{
               }}
            >
              
            </div>
            <div
              className="    rounded-lg  p-4 shadow-md"
              style={{
                
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">Economic Growth</div>
              <div className="text-md leading-tight">
                Drive economic growth by providing ROV services and solutions
                that benefit industries and research organizations worldwide.
              </div>
            </div>
            <div
              className="viscard rounded-lg   p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Customer Satisfaction
              </div>
              <div className="text-md leading-tight">
                Stay at the forefront of ROV technology through ongoing research
                and development, adapting to emerging challenges and
                opportunities in underwater exploration.
              </div>
            </div>
          </div>
          
        </div>

        <h2 className=" features  pt-0 mt-3 flex items-center justify-center text-3xl font-bold ">
          
          Features
        </h2>
        <p className="flex flex-col w-full items-center  ml-6 mr-6  max-w-2xl text-center  text-black  text-xl ">
          Introducing our cutting-edge underwater Remotely Operated Vehicle
          (ROV), designed for unparalleled exploration beneath the waves:
        </p>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex font-montserrat p-8 ${index % 2 === 1 ? 'flex-row' : 'flex-row-reverse'} items-center my-8`}
          >
            <div className=" md:w-1/3 lg:pl-10 lg:pr-10 lg:w-1/2 w-full lg:h-auto h-4 object-cover object-center rounded">
              <img
                src={feature.img}
                alt={feature.title}
                className="mx-auto md:mx-0 rounded-3xl"
              />
            </div>
            <div className={`w-1/2 md:w-2/3 lg:w-1/2 w-full lg:pl-10 lg:pr-10 lg:py-6 mt-6 lg:mt-0  ${index % 2 === 1 ? 'text-right' : 'text-left'} mx-auto md:mx-0`}>
              <h3 className="text-2xl font-semibold py-4 ">{feature.title}</h3>
              <p className="text-lg leading-relaxed ">{feature.desc}</p>
            </div>
          </div>
        ))}
        {/* <ProductComponent
          imageSrc="/i1.png"
          title="High-Definition Live Imaging:"
          description="Experience the depths like never before with a live HD camera and advanced lighting system, providing crystal-clear visuals for wired communication. Immerse yourself in the underwater world in real-time."
        />
        <ProductComponent1
          imageSrc="/i1.png"
          title="Precision Control with 5 Degrees of Freedom:"
          description="Our ROV boasts 5 Degrees of Freedom (5-DoF) through a vectored thruster configuration, allowing precise maneuverability in every direction. Explore underwater environments with ease and agility."
        />
        <ProductComponent
          imageSrc="/i1.png"
          title="Powerful Propulsion:"
          description=" Our ROV boasts 5 Degrees of Freedom (5-DoF) through a vectored thruster configuration, allowing precise maneuverability in every direction. Explore underwater environments with ease and agility."
        />
        <ProductComponent1
          imageSrc="/i1.png"
          title="Modular Expandability:"
          description="Designed with a modular frame, our ROV allows for easy customization and expandability. Adapt the system to meet your specific exploration needs and integrate additional sensors or equipment seamlessly."
        />
        <ProductComponent
          imageSrc="/i1.png"
          title="Intuitive Controller Software:"
          description="Our integrated controller software draws inspiration from industry-leading solutions like Ardusub, Ardupilot, and QGroundControl. Enjoy user-friendly interfaces and robust functionality for seamless operation."
        />
        <ProductComponent1
          imageSrc="/i1.png"
          title="Versatile Communication Options:"
          description="Choose the communication method that suits your mission best. Whether it's Li-Fi for high-speed wireless tasks, UART for versatile connectivity, or Ethernet for extended reach and high data transfer rate, our ROV offers flexible communication solutions."
        />
        <ProductComponent
          imageSrc="/i1.png"
          title="Object Mapping and Identification:"
          description="Choose the communication method that suits your mission best. Whether it's Li-Fi for high-speed wireless tasks, UART for versatile connectivity, or Ethernet for extended reach and high data transfer rate, our ROV offers flexible communication solutions."
        />
        <ProductComponent1
          imageSrc="/i1.png"
          title="Streamlined Design:"
          description="Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque."
        />
        <ProductComponent
          imageSrc="/i1.png"
          title="Blue Dress v2"
          description="Our ROV's streamlined frame minimizes drag, ensuring optimal maneuverability and efficiency. Glide through the water with grace and precision."
        /> */}
        <p className="flex flex-col w-full items-center p-8 mr-6 ml-6 text-xl max-w-2xl text-black text-center ">
          Unleash the potential of underwater exploration with our
          state-of-the-art ROV, setting new standards for versatility,
          performance, and imaging quality in the world beneath the surface.
          Explore, discover, and document the mysteries of the deep with
          confidence.
        </p>
      </div>
    </div>
  );
};

export default Hero3;

{
  /* <div className="gallery bg-galery bg-no repeat bg-cover">
          
          <div className="left">
            <div className="detailsWrapper">
              <div className="details">
                <div className="headline turqoise" >5 Degrees of Freedom
                <p className='text'>egwfciodlxksmn</p>
                </div>
              </div>
              <div className="details">
                <div className="headline bs" >3 Ways of Communication
               <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
              <div className="details">
                <div className="headline raf" >Relative Mapping of Underwater Objects
                <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
              <div className="details">
                <div className="headline skyblue" >Relative Mapping of Underwater Objects
                <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
              <div className="details">
                <div className="headline bbe" >Relative Mapping of Underwater Objects
                <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
              <div className="details">
                <div className="headline bluegrey" >Relative Mapping of Underwater Objects
                <p> Li-Fi
                UART without vedio streaming
                Ethernet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="photos">
              <div className="photo card bg-rov1 bg-cover bg-no repeat ">5 Degrees of Freedom</div>
              <div className="photo card bg-Lifi bg-cover bg-no repeat ">3 Ways of Communication</div>
              <div className="photo card bg-rov2 bg-cover bg-no repeat">Relative Mapping of Underwater Objects</div>
              <div className="photo card bg-rov3 bg-cover bg-no repeat">Faster Travel</div>
              <div className="photo card bg-cs bg-cover bg-no repeat">Integrated ROV Control Software</div>
              <div className="photo card bg-ls bg-cover bg-no repeat">Live Video Streaming</div>
              <div className="photo card bg-dm bg-cover bg-no repeat">Depth Monitoring</div>
              <div className="photo card bg-dl bg-cover bg-no repeat">Data Logging</div>
            </div>
          </div>
        </div> */
}
