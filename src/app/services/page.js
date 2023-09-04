// pages/services.js

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
"use client"
import CarouselComponent from '@/components/ServicesCarousel';

import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <NavBar />   */}
      <main className="flex-grow p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-4 mt-14 flex justify-center items-center">Our Services</h1>
       
        <div>
        <CarouselComponent/>
        </div>
        {/* Add your carousel or other service content here */}
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;