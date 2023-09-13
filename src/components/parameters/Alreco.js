import React, { useEffect, useState } from 'react';
import supabase from '@/lib/supabase-browser';
import Chart from 'chart.js/auto';

const Alreco = () => {
  const [Records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handlegetItems();


    
const parameters = supabase.channel('custom-insert-channel')
.on(
  'postgres_changes',
  { event: 'INSERT', schema: 'public', table: 'parameters' },
  (payload) => {
    console.log('Change received!', payload)
    handlegetItems();
  }
)
.subscribe()
  }, []);

  const handlegetItems = async () => {
    try {
      setLoading(true);
      const { data: Records } = await supabase
        .from('parameters')
        .select('ph, tds, turb, temp, bat_vol, created_at')
        .order('created_at', { ascending: false });

      console.log(Records);
      if (Records != null) {
        setRecords(Records);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Records.map((Record) => Record.created_at),
        datasets: [
          {
            data: Records.map((Record) => Record.temp),
            label: 'Temperature',
            borderColor: '#3e95cd',
            backgroundColor: '#7bb6dd',
            fill: false,
          },
          {
            data: Records.map((Record) => Record.ph),
            label: 'pH',
            borderColor: '#3cba9f',
            backgroundColor: '#71d1bd',
            fill: false,
          },
          {
            data: Records.map((Record) => Record.turb),
            label: 'Turbidity',
            borderColor: '#ffa500',
            backgroundColor: '#ffc04d',
            fill: false,
          },
          {
            data: Records.map((Record) => Record.tds),
            label: 'TDS',
            borderColor: '#c45850',
            backgroundColor: '#d78f89',
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
  }, [Records]);

  return (
    <div className="container mx-auto p-4">

<div className='graph'>
      <div className="my-8">
        <div className="mx-auto max-w-screen-md">
          <div className="shadow-xl rounded-xl border border-gray-400">
            <canvas id="myChart" />
          </div>
        </div>
      </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <table className="w-full text-left text-sm text-gray-500  table-auto">
            <thead>
              <tr>
                <th scope="col" className="py-3 md:px-6">
                  Created_at
                </th>
                <th scope="col" className="py-3 md:px-6">
                  Temp
                </th>
                <th scope="col" className="py-3 md:px-6">
                  pH
                </th>
                <th scope="col" className="py-3 md:px-6">
                  Turbidity
                </th>
                <th scope="col" className="py-3 md:px-6">
                  TDS
                </th>
                <th scope="col" className="py-3 md:px-6">
                  Battery_voltage
                </th>
              </tr>
            </thead>
            <tbody>
              {Records.map((Record) => (
                <tr className="border-b bg-white  ">
                  <th
                    scope="row"
                    className=" px-6 py-4 font-medium  "
                  >
                    {Record.created_at}
                  </th>
                  <td className="px-6 py-4">{Record.temp}</td>
                  <td className="px-6 py-4">{Record.ph}</td>
                  <td className="px-6 py-4">{Record.turb}</td>
                  <td className="px-6 py-4">{Record.tds}</td>
                  <td className="px-6 py-4">{Record.bat_vol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </div>
  );
};

export default Alreco;
