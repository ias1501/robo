import React, { useEffect, useState } from 'react'
import supabase from '@/lib/supabase-browser';
import Chart from 'chart.js/auto';


const turb = () => {
    
    const [Recoturb, setRecoturb] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    filtergetturbItems();
    const parameters = supabase.channel('custom-insert-channel')
.on(
  'postgres_changes',
  { event: 'INSERT', schema: 'public', table: 'parameters' },
  (payload) => {
    console.log('Change received!', payload)
    filtergetturbItems();
  }
)
.subscribe()
  }, []);

  const filtergetturbItems = async () => {
    try {
      setLoading(true);
      const { data: Recoturb } = await supabase
        .from('parameters')
        .select('created_at,turb ') // columns to select from the database
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;

      console.log(Recoturb);
      if (Recoturb != null) {
        setRecoturb(Recoturb); // [product1,product2,product3]
        // { (Recoturb>10) ?  <Horizontalchart/> : false }
      }
      // if (Recoturb.map((Record)=>Record.turb>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };


  useEffect(() => {
    if (Recoturb.length > 0) {
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Recoturb.map((record) => record.created_at),
          datasets: [
            {
              data: Recoturb.map((record) => record.turb),
              label: 'Turbidity',
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
  }, [Recoturb]);

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
              <th className="px-4 py-2">Turbidity</th>
            </tr>
          </thead>
          <tbody>
            {Recoturb.map((Record) => (
              <tr key={Record.created_at} className="odd:bg-gray-100">
                <td className="px-4 py-2">{Record.created_at}</td>
                <td className="px-4 py-2">{Record.turb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-4 text-3xl">Records having greater than 5 NTU Turbidity</h2>
      <div className="align-items-right container">
            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h4 className="sfw-normal mb-1">Turbidity range</h4>

                <p>
                  Max: <strong>5 NTU</strong>, Min: <strong>1 NTU</strong>
                </p>

                <div className="d-flex align-items-center flex-row">
                  <i className="fas fa-cloud fa-3x">
                    1.IS 10500:2010
                    <br />
                    Acceptable unit:1 NTU Permissible limits:5 NTU
                    <br />
                    2.Suggestions:Settling or filtrations process using sand
                    filtration,settling tanks and clarifiers.
                  </i>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default turb