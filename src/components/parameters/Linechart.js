"use client"
import React,{useState, useEffect} from 'react';
// import Chart from 'react-apexcharts';
import Chart from 'chart.js/auto';
// function Linechart()
// {
//     const [sData, setSdata]= useState([]);
//     useEffect( ()=>{
//         const getvaluedata= async()=>{
//             const newvalue=[];
//             const reqData= await fetch('http://localhost/reactgraphtutorial/product/');
//             const resData= await reqData.json();
//             //console.log(resData);
//             for(let i=0; i < resData.length; i++)
//             {
//                 newvalue.push({name:resData[i].category_title, data:resData[i].value });   

//             }
//             setSdata(newvalue);

//         }
//         getvaluedata();
//     },[]);   

//     return(<React.Fragment>
//         <div className='container-fluid mt-3 mb-3'>
//           <h2>Line Chart- Using Apexcharts in React </h2>          
//           <Chart type='line'
//           width={1450}
//           height={550}
//           series={sData}
//           options={{
//             title:{ text:"Product sell in 2021"},
//             xaxis:{
//                 title:{text:"Product Sell in Months"},
//                 categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
//             },
//             yaxis:{
//                 title:{text:"Product in K"}                 
//             }          

//         }}
//           >
//           </Chart>

//         </div>
//     </React.Fragment>);
// }

// export default Linechart;


function Example({ records }) {
    useEffect(() => {
      // let myChart = null;
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
  
        data: {
          labels: records.map((Record) => Record.created_at),
          datasets: [
            {
              data: records.map((Record) => Record.temp),
              label: 'Temperature',
              borderColor: '#3e95cd',
              backgroundColor: '#7bb6dd',
              fill: false,
            },
            
          ],
        },
      });
      return () => {
        if (myChart) {
          myChart.destroy();
        }
      };
    }, [records]);
  
    // console.log(records);
    return (
      <>
        {/* line chart */}
        <div className="graph my-8 w-screen overflow-x-scroll rounded-xl bg-black py-12">
          <div className="m-auto flex max-md:w-[60rem] md:w-[1100px] ">
            <div className="my-auto w-full pt-0  shadow-xl md:rounded-xl md:border  md:border-gray-400">
              <canvas id="myChart" />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Example;
  