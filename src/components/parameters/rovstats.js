import React, { useEffect, useState } from 'react'
import supabase from '@/lib/supabase-browser';
import Chart from 'chart.js/auto';

const RovStats = () => {

    const [RecoStat, setRecoState] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    filtergetstatItems();

    const parameters = supabase.channel('custom-insert-channel')
.on(
  'postgres_changes',
  { event: 'INSERT', schema: 'public', table: 'parameters' },
  (payload) => {
    console.log('Change received!', payload)
    filtergetstatItems();
  }
)
.subscribe()
  }, []);

  const filtergetstatItems = async () => {
    try {
      setLoading(true);
      const { data: RecoStat } = await supabase
        .from('positional_para')
        .select('created_at,Acc_x,Acc_y,Acc_z,gyro_roll,gyro_pitch,gyro_yarn ') // columns to select from the database
        .order('created_at', { ascending: false }); // sort the data so the last item comes on top;

      // console.log(RecoStat.map((reco)=>{reco.gyro_roll}));
      if (RecoStat != null) {
        setRecoState(RecoStat); // [product1,product2,product3]
        // { (RecoStat>10) ?  <Horizontalchart/> : false }
      }
      // if (RecoStat.map((Record)=>Record.ph>10)) {
      //   <Horizontalchart/>
      // }
    } catch (error) {
      console.log(err);
    }
    setLoading(false);
  };
  

  return (

<div className="container mx-auto p-4">





    <div className="p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Created_at</th>
              <th className="px-4 py-2" colSpan={3}>Accelerometer</th>
              <th className="px-4 py-2" colSpan={3}>Gyroscope</th>
            </tr>
            <tr>
            <th className="px-6 py-3"></th>

            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Acc_x</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Acc_y</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Acc_z</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">gyro_roll</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">gyro_pitch</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">gyro_yarn</th>
  
            </tr>
          </thead>
          <tbody>
            {RecoStat.map((Record) => (
              <tr key={Record.created_at} className="odd:bg-gray-100">
                <td className="px-4 py-2">{Record.created_at}</td>
                <td className="px-4 py-2">{Record.Acc_x}</td>
                <td className="px-4 py-2">{Record.Acc_y}</td>
                <td className="px-4 py-2">{Record.Acc_z}</td>
                <td className="px-4 py-2">{Record.gyro_roll}</td>
                <td className="px-4 py-2">{Record.gyro_pitch}</td>
                <td className="px-4 py-2">{Record.gyro_yarn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>

  
   
  )
}

export default RovStats