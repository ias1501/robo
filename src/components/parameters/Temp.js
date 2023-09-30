import React, { useEffect, useState } from 'react'
import supabase from '@/lib/supabase-browser';
import Chart from 'chart.js/auto';
// import 'chart.js/dist/chart.css';
const Temp = () => {
    
    const [RecoTemp, setRecoTemp] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      filtergetTempItems();
      const parameters = supabase.channel('custom-insert-channel')
.on(
  'postgres_changes',
  { event: 'INSERT', schema: 'public', table: 'parameters' },
  (payload) => {
    console.log('Change received!', payload)
    filtergetTempItems();
  }
)
.subscribe()
     
    }, []);
    const filtergetTempItems = async () => {
      try {
        setLoading(true);
        const { data: RecoTemp } = await supabase
          .from('parameters')
          .select('created_at,temp ') // columns to select from the database
          .order('created_at', { ascending: false }); // sort the data so the last item comes on top;
  
        console.log(RecoTemp);
        if (RecoTemp != null) {
          setRecoTemp(RecoTemp); // [product1,product2,product3]
          // { (RecoTemp>10) ?  <Horizontalchart/> : false }
        }
        // if (RecoTemp.map((Record)=>Record.temp>10)) {
        //   <Horizontalchart/>
        // }
      } catch (error) {
        console.log(err);
      }
      setLoading(false);
    };
    useEffect(() => {
      if (RecoTemp.length > 0) {
        const ctx = document.getElementById("myChart").getContext("2d");
        const myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: RecoTemp.map((record) => record.created_at),
            datasets: [
              {
                data: RecoTemp.map((record) => record.temp),
                label: "Temperature",
                borderColor: "green",
            backgroundColor: "#71d1bd",
                color: "#36A2EB",
                fill: false,
              },
            ],
            
          },
          options: {
            scales: {
              x: {
                ticks: {
                  color: "white", // Change the font color of x-axis ticks
                },
                title: {
                  display: true,
                  text: "Time",
                  color: "white", // Change the font color of x-axis title
                },
              },
              y: {
                ticks: {
                  color: "white", // Change the font color of y-axis ticks
                },
                title: {
                  display: true,
                  text: "Values",
                  color: "white", // Change the font color of y-axis title
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: "white", // Change the font color of legend labels
                },
              },
            },
          },
        });
        return () => {
          // Destroy the chart when the component unmounts
          if (myChart) {
            myChart.destroy();
          }
        };
      }
    }, [RecoTemp]);
  // console.log(RecoTemp.temp);


  return (
    <div className="container mx-auto p-4 rounded-lg font-montserrat justify-center">
    <div className="p-4 shadow-lg rounded-lg" style={{
      background:
        "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
    }}>
    <div className="graph">
        <div className="my-8">
          <div className="mx-auto max-w-screen-md">
            <div className="shadow-xl rounded-xl border border-gray-400" style={{
                background: "rgba(71, 71, 71, 0.25)",
                backdropfilter: "blur(17.019758224487305px)",
              }}>
              <canvas id="myChart" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
      <table className="table w-full table-auto text-left text-sm  text-gray-200 font-montserrat " style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}>
          <thead>
            <tr className='border rounded-xl border-rounded-xl'>
              <th className="px-4 py-2">Created_at</th>
              <th className="px-4 py-2">Temperature</th>
            </tr>
          </thead>
          <tbody>
            {RecoTemp.map((Record) => (
              <tr key={Record.created_at} className="border">
                <td className="px-4 py-2">{Record.created_at}</td>
                <td className="px-4 py-2">{Record.turb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="card font-montserrat text-color-white" style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}>
        <h2 className="mt-4 text-3xl  font-montserrat text-color-white" >Records having greater than 5 NTU Turbidity</h2>

        <div className="align-items-right container  mt-4">
          <div className="card shadow-0 border" style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}>
            <div className="card-body p-4">
                <h4 className="sfw-normal mb-1">Temperature range</h4>

                <p>
                  Max: <strong>20°C</strong>, Min: <strong>10°C</strong>
                </p>

                <div className="d-flex align-items-center flex-row">
                  <i  />
                </div>
                </div>
          </div>
        </div>
        </div>
    </div>
  </div>
  )
}

export default Temp




