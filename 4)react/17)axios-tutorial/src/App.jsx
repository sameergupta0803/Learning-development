import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [data,setData]=useState([])
  const getData=async()=>{
      const response=await axios.get('https://picsum.photos/v2/list');
      setData(response.data)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <button onClick={getData} className='bg-teal-700 text-white rounded-2xl px-6 py-3 font-semibold text-2xl'>Get Data</button>
      {data.map((d,idx)=>{
        return <div key={idx} className='bg-amber-200 mb-3 flex justify-between items-center'>
          <img src={d.download_url} className='h-40  '/>
          <h1>{d.author}</h1>
        </div>
      })}
    </div>
    
  )
}

export default App