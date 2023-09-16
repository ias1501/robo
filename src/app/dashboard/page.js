import createClient from 'src/lib/supabase-server';

// import React from 'react'
// import { redirect } from 'next/navigation';

// const Dashboard = async() => {

//   const supabase = createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     redirect('/');
//   }
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard




import React from 'react';
import "./dashboard.css";
import Sidebar from '@/components/sidebar';
import { redirect } from 'next/navigation';
// import Part from './p';
// import Linechart from '@/components/parameters/Linechart';


//     <div class="sidebar">
//   <div class="brand">
//     <p>W<span>anderSub</span></p>
//   </div>
//   <ul class="nav-list">
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//         <i class = "icon icon ion-happy-outline"></i>
//         </span>
//         <span class="nav-item__text">
//           All Paremters
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="chatbox-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//           pH
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="people-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            TDS
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="person-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            Turbidity
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="person-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            Temperature
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="person-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            Settings
//         </span>
//       </a>
//     </li>
//   </ul>
//   <ul class="nav-list">
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon avatar">
          
//         </span>
//         <span class="nav-item__text">
//             Isha Shah
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon logout">
//           <ion-icon name="log-out-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            Logout
//         </span>
//       </a>
//     </li>
//   </ul>
// </div>

const Dashboard = async(params) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/');
  }
  // if(params.ph){
  //   <Ph />
  // }
 
  return (
    <div className="bg-dashboard bg-cover bg-no-repeat min-h-screen flex flex-row items-center justify-center ">
  
  <Sidebar />

  <div className="flex-grow">
    <div className="container mx-auto px-4 lg:px-12 py-8 lg:py-12">
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-200 mb-4">Analytics</h1>
        <p className="text-gray-200 text-lg mb-4">
          Here you can access all the analytics data of the ROV. In the sidebar, you can navigate to specific sections.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> 
       
        <div className=" p-4  rounded-lg shadow-md" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
          <h2 className="text-xl font-semibold text-gray-200 mb-2">All Records</h2>
          <p className="text-gray-200">
            View real-time records of sensor readings and battery values.
          </p>
        </div>
        
        <div className=" p-4  rounded-lg shadow-md" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Individual Parameters</h2>
          <p className="text-gray-200">
            Explore specific parameters, including sensor value tables, graphs, and suggestions.
          </p>
        </div>
        
 
        <div className=" p-4  rounded-lg shadow-md" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Mapping</h2>
          <p className="text-gray-200">
            Visualize the accelerometer values of the WanderSub, along with a table of gyroscope values.
          </p>
        </div>
        
        <div className=" p-4  rounded-lg shadow-md" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',
}}>
          <h2 className="text-xl font-semibold text-gray-200 mb-2">Statistics</h2>
          <p className="text-gray-200">
            Visualize statistics related to the ROV's performance and data.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
 

export default Dashboard