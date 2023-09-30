import createClient from "src/lib/supabase-server";

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

import React from "react";
import "./dashboard.css";
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";
import Alreco from "@/components/parameters/Alreco";
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

const Dashboard = async (params) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }
  // if(params.ph){
  //   <Ph />
  // }

  return (
    <div className="flex min-h-screen flex-row items-center justify-center bg-dashboard bg-cover bg-no-repeat ">
      <Sidebar />

      <div
        className="card m-10 flex-grow self-start"
        style={{
          background:
            "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
        }}
      >
        
        <Alreco />
      </div>
    </div>
  );
};

export default Dashboard;
