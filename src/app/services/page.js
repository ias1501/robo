// pages/services.js

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
"use client"
import CarouselComponent from '@/components/ServicesCarousel';

import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';

const ServicesPage = () => {
  return (
    <div className="container flex flex-col min-h-screen bg-dashboard" >
      {/* <NavBar />   */}
      <main className="flex-grow p-4 md:p-8" style={{
                background: "rgba(71, 71, 71, 0.25)",
                backdropfilter: "blur(17.019758224487305px)",
               
              }}>
        <h1 className="text-4xl font-bold mb-4 mt-14 flex justify-center items-center">Our Services</h1>
       
        <div>
        <CarouselComponent/>
        </div>
        {/* Add your carousel or other service content here */}
      </main>

      
    </div>
  );
};

export default ServicesPage;