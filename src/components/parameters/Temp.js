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
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: RecoTemp.map((record) => record.created_at),
          datasets: [
            {
              data: RecoTemp.map((record) => record.temp),
              label: 'Temperature',
              borderColor: '#3e95cd',
              backgroundColor: '#7bb6dd',
              fill: false,
            },
          ],
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
    <div className="container mx-auto p-4">
    <div className="bg-white shadow-lg rounded-lg">
    <div className="graph">
        <div className="my-8">
          <div className="mx-auto max-w-screen-md">
            <div className="shadow-xl rounded-xl border border-gray-400">
              <canvas id="myChart" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Created_at</th>
              <th className="px-4 py-2">Temp</th>
            </tr>
          </thead>
          <tbody>
            {RecoTemp.map((Record) => (
              <tr key={Record.created_at} className="odd:bg-gray-100">
                <td className="px-4 py-2">{Record.created_at}</td>
                <td className="px-4 py-2">{Record.temp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-4 text-3xl">Records having greater than 20 temp</h2>
      <div className="align-items-right container mt-4">
            <div className="card shadow-0 border">
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
  )
}

export default Temp




