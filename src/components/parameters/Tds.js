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
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Recotds.map((record) => record.created_at),
          datasets: [
            {
              data: Recotds.map((record) => record.tds),
              label: 'TDS',
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
  }, [Recotds]);

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
              <th className="px-4 py-2">TDS</th>
            </tr>
          </thead>
          <tbody>
            {Recotds.map((Record) => (
              <tr key={Record.created_at} className="odd:bg-gray-100">
                <td className="px-4 py-2">{Record.created_at}</td>
                <td className="px-4 py-2">{Record.tds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-4 text-3xl">Records having greater than 2000 mg/l TDS</h2>
      <div className="container mx-auto flex h-fit w-fit items-center justify-center">
          <div className="card shadow-0 border">
            <div className="card-body p-4">
              <h4 className="sfw-normal mb-1">TDS range</h4>

              <p>
                Max: <strong>2000 mg/l</strong>, Min: <strong>5000 mg/l</strong>
              </p>

              <div className="d-flex align-items-center flex-row">
                <i >
                  1.IS 10500-2012
                  <br />
                  Acceptable limit:500 mg/I permissible:2000mg/l
                  <br />
                  2.Suggestions:Reverse osmosis Distillation deionization by Ion Exchange
                </i>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default tds