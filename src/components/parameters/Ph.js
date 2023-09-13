import React, { useEffect, useState } from 'react'
import supabase from '@/lib/supabase-browser';
import Chart from 'chart.js/auto';
import "./param.css";
const ph = () => {

    const [RecopH, setRecopH] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    filtergetpHItems();

    const parameters = supabase.channel('custom-insert-channel')
.on(
  'postgres_changes',
  { event: 'INSERT', schema: 'public', table: 'parameters' },
  (payload) => {
    console.log('Change received!', payload)
    filtergetpHItems();
  }
)
.subscribe()
  }, []);

  const filtergetpHItems = async () => {
    try {
      setLoading(true);
      const { data: RecopH } = await supabase
        .from('parameters')
        .select('created_at,ph ') // columns to select from the database
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;

      console.log(RecopH);
      if (RecopH != null) {
        setRecopH(RecopH); // [product1,product2,product3]
        // { (RecopH>10) ?  <Horizontalchart/> : false }
      }
      // if (RecopH.map((Record)=>Record.ph>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (RecopH.length > 0) {
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: RecopH.map((record) => record.created_at),
          datasets: [
            {
              data: RecopH.map((record) => record.ph),
              label: 'pH',
              borderColor: '#3e95cd',
              backgroundColor: '#7bb6dd',
              color:'#36A2EB',
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
  }, [RecopH]);

  return (
 <div className="container mx-auto p-4 bg-dashboard">
    <div className="container1">
    <div className="graph">
        <div className="my-8">
          <div className="mx-auto max-w-screen-md ">
            <div className="graph1 shadow-xl rounded-xl border border-gray-400">
              <canvas id="myChart" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Created_at</th>
              <th className="px-4 py-2">pH</th>
            </tr>
          </thead>
          <tbody>
            {RecopH.map((Record) => (
              <tr key={Record.created_at} className="odd:bg-gray-100">
                <td className="px-4 py-2">{Record.created_at}</td>
                <td className="px-4 py-2">{Record.ph}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-4 text-3xl">Records having greater than 8.5 pH</h2>

      <div className="align-items-right container  mt-4">
            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h3 className="sfw-normal mb-1">pH range</h3>

                <p>
                  Max: <strong>8.5</strong>, Min: <strong>6.5</strong>
                </p>

                <div className="d-flex align-items-center flex-row">
                  <i className="fas fa-cloud fa-3x">
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
   
  )
}

export default ph