"use client"
import { useParams, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Ph from '@/components/parameters/Ph';
import Temp from '@/components/parameters/Temp';
import Turb from '@/components/parameters/Turb';
import Alreco from '@/components/parameters/Alreco';
import Rovstats from '@/components/parameters/Rovstats';
import Tds from '@/components/parameters/Tds';
import Sidebar from '@/components/sidebar';
import Reletpos from '@/components/parameters/Reletpos';


// const tabs = ["ph","tds"];
const page = ({ params }) => {
  // const router = useRouter();
  // const { page } = router.query;
  let content = '';
  if (params.para === 'ph') {
    content=<Ph />;
  }else if (params.para === 'tds') {
    content=<Tds /> ;
  }else if (params.para === 'temp') {
    content=<Temp /> ;
  }else if (params.para === 'turb') {
    content=<Turb /> ;
  }else if (params.para === 'alreco') {
    content=<Alreco /> ;
  }else if (params.para === 'rovstat') {
    content=<Rovstats /> ;
  }else if (params.para === 'reletpos') {
    content=<Reletpos /> ;
  } 
  // const [activeTab, setActiveTab] = useState(tabs[0]);
  
  // const displaytabContent =()=>{
    
  //   switch(activeTab) {
  //     case "ph":
  //       return(
  //         <div>ph</div>
  //       )
  //     default:
  //       return null;  
  //   }
  // };
  console.log(params.para);
  return (
    <div className="flex-row lg:flex">
      <Sidebar />
      <div className="container mx-auto mt-4 lg:mt-12 ">
        <div className="p-4 mx-2 shadow-sm">
          {content} 
        </div>
      </div>
    </div>
  )
}

export default page