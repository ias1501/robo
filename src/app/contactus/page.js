"use client"
import React from 'react';
import { motion } from 'framer-motion';
// import NavBar from '@/components/components/Navbar';
// import Footer from '@/components/components/Footer';
const Contact = () => {
    const formVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
      };
      const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 } },
      };
  return (
    <div className="min-h-screen flex flex-col bg-dashboard bg-no-repeat bg-cover   ">
      {/* <NavBar /> */}
      
    <div className="flex-1 flex items-center justify-center">
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg backdrop-blur-md backdrop-filter bg-opacity-30 w-full sm:w-96 md:w-4/5 lg:w-3/5 flex flex-col md:flex-row"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="md:w-1/2 pr-8">
        
        <form>
          <motion.div className="mb-4"  variants={inputVariants} >
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-200 bg-opacity-60 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
            </motion.div>
          
          <motion.div className="mb-4" variants={inputVariants}>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 bg-gray-200 bg-opacity-60 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="you@example.com"
          />
        </motion.div>
          <motion.div className="mb-4" variants={inputVariants}>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            className="w-full px-3 py-2 bg-gray-200 bg-opacity-60 border rounded-lg resize-none h-32 focus:outline-none focus:border-blue-500"
            placeholder="Your message..."
          />
        </motion.div>
          {/* Other form input fields */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="md:w-1/2 bg-contactus bg-cover bg-no-repeat">
        {/* Add your image or text content */}
        {/* Example: */}
       
      </div>
    </motion.div>
    </div>
    
   
    </div>
  );
};

export default Contact;