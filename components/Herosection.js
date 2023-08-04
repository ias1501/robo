import React from "react";
import Link from "next/link";

function HeroSection() {
	return (
       
  

		<div className="bg-gradient-to-l md:bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center flex-col  pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
			<h1 className="text-gray-900 pb-10">
				 UnderwaterROV<span className="text-blue-500">Robust</span> &{" "}
				<span className="text-blue-400"></span>
			</h1>
            <Link href="../pages/signin">
           
			<div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
				<h1 className="text-center">Let's start 🚀 </h1>
			</div>
            </Link>
		</div>
    
	);
}

export default HeroSection;