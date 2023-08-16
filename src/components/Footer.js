import React from "react";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

export default function Footer(){
    return(
      
    <div className="bg-white h-5 w-full flex md:flex-row flex-col justify-around itens-start p-20" >
        <div className="p-5">
        
          <ul>
          <div className="flex gap-6 pb-5 items-top  shadow-xl bg-transparent">
                {/* Section for icons */}
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600"/>
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600"/>
                <FaLinkedinIn className="text-2xl cursor-pointer hover:text-blue-600"/>
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600"/>
            </div>
            <p className="text-gray-800  font-bold text-3xl pb-1">
                Wander <span className="text-blue-600">Sub</span>
            </p>
          
          </ul>
        </div>
        <div className="flex felx-col justify-center items-center text-center p-5 bg-gray-50">
          
            <h1 className="text-gray-800 font-semibold">Copyright © 2023 WanderWater | All Rights Reserved </h1>
           
            
          
        </div>
        {/* <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Aboutus</li>
          </ul>

        </div> */}

    </div>
    
    )
  
}





// import React from "react";
// import {FaInstagram} from "react-icons/fa";
// import {FaTwitter} from "react-icons/fa";
// import {FaLinkedinIn} from "react-icons/fa";
// import {FaYoutube} from "react-icons/fa";

// export default function Footer(){
//     return <div className="bg-pink-50 h-1/2 w-full flex md:flex-row flex-col justify-around itens-start p-20" >
//         <div className="p-5">
//           <ul>
//             <p className="text-gray-800 font-bold text-3xl pb-6">
//                 Wander <span className="text-blue-600">Sub</span>
//             </p>
//             <div className="flex gap-6 pb-5">
//                 {/* Section for icons */}
//                 <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600"/>
//                 <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600"/>
//                 <FaLinkedinIn className="text-2xl cursor-pointer hover:text-blue-600"/>
//                 <FaYoutube className="text-2xl cursor-pointer hover:text-red-600"/>
//             </div>
//           </ul>
//         </div>
//         <div className="p-5">
//           <ul>
//             <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">WanderFloat</li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">WanderWater</li>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">WanderSub</li>
            
//           </ul>
//         </div>
//         <div className="p-5">
//           <ul>
//             <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
//             <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Aboutus</li>
//           </ul>

//         </div>

//     </div>;
// }
