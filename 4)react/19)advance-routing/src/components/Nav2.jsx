import React from 'react'
import { useNavigate } from 'react-router'

const Nav2 = () => {
    const navigate=useNavigate()
  return (
    <div className='bg-blue-400 py-5 flex justify-center items-center gap-5'>
        <button onClick={()=>{
            navigate('/')
        }}
        className='py-3 px-10 bg-emerald-600 rounded-xl font-semibold text-lg'>Home
        </button>
        <button onClick={()=>{
            navigate(-1)
        }}
        className='py-3 px-10 bg-emerald-600 rounded-xl font-semibold text-lg'>Back
        </button>
        <button onClick={()=>{
            navigate(+1)
        }}
        className='py-3 px-10 bg-emerald-600 rounded-xl font-semibold text-lg'>Next
        </button>
    </div>
  )
}

export default Nav2