import React, { useEffect, useState } from 'react'
import supabase from '@/lib/supabase-browser';
import Chart from 'chart.js/auto';


const tds = () => {
    
    const [Recotds, setRecotds] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    filtergetTdsItems();

    const parameters = supabase.channel('custom-insert-channel')
.on(
  'postgres_changes',
  { event: 'INSERT', schema: 'public', table: 'parameters' },
  (payload) => {
    console.log('Change received!', payload)
    filtergetTdsItems();
  }
)
.subscribe()
  }, []);

  const filtergetTdsItems = async () => {
    try {
      setLoading(true);
      const { data: Recotds } = await supabase
        .from('parameters')
        .select('created_at,tds ') // columns to select from the database
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;

      console.log(Recotds);
      if (Recotds != null) {
        setRecotds(Recotds); // [product1,product2,product3]
        // { (Recotds>10) ?  <Horizontalchart/> : false }
      }
      // if (Recotds.map((Record)=>Record.tds>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    if (Recotds.length > 0) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: Recotds.map((record) => record.created_at),
          datasets: [
            {
              data: Recotds.map((record) => record.tds),
              label: "TDS",
              borderColor: "Red",
              backgroundColor: "#d78f89",
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
  }, [Recotds]);
  return (

    <div className="container mx-auto p-4 rounded-lg font-montserrat" >
    <div className="p-4 shadow-lg rounded-lg" style={{
      background:
        "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
    }}>
    <div className="graph">
        <div className="my-8">
          <div className="mx-auto max-w-screen-md">
            <div className="shadow-xl rounded-xl border border-gray-400"  style={{
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
              <th className="px-4 py-2">TDS</th>
            </tr>
          </thead>
          <tbody>
            {Recotds.map((Record) => (
              <tr key={Record.created_at} className="border">
                <td className="px-4 py-2">{Record.created_at}</td>
                <td className="px-4 py-2">{Record.tds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="card font-montserrat text-color-white" style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}>
        <h2 className="mt-4 text-3xl  font-montserrat text-color-white">Records having greater than 2000 mg/l TDS</h2>

        <div className="align-items-right container  mt-4">
          <div className="card shadow-0 border" style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}>
            <div className="card-body p-4">
              <h3 className="sfw-normal mb-1 text-xl">pH Range</h3>

              <p>
                Max: <strong>8.5</strong>, Min: <strong>6.5</strong>
              </p>

              <div className="d-flex align-items-center flex-row">
                <i>
                  1.IS 10500-2012 Acceptable limits:6.5-8.5
                  <br />
                  permissible:No relaxation
                  <br />
                  2.Suggestions:Increase pH by soda ash Decrease pH by white
                  vinegar/citric acid
                </i>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>
  )
}

export default tds