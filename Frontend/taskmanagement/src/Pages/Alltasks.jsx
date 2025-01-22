import React from 'react'
import Navbar from '../Components/Navbar'

const Alltasks = () => {



  return (
    <>
    <Navbar />
 
    <div className='w-80 p-4  bg-slate-300 mt-12 ml-6 md:ml-12   h-auto'>

      <h1 className='text-3xl font-bold'>Title </h1>
      <p className='mt-5'>description</p>
      <p className='mt-2'>Status</p>
      <p className='mt-2'>Priority</p>
      <p>Date</p>

     <div className='mt-2'>
     <button className='bg-slate-700 font-bold text-white p-2 rounded-xl'><a href="/UpdateTask">Update</a></button>
     <button className='bg-slate-700 font-bold text-white p-2 rounded-xl ml-24'>Delete</button>
     </div>

    </div>
    
    </>
  )
}

export default Alltasks