import React from 'react'
import Navbar from '../Components/Navbar'

const UpdateTask = () => {
  return (
    <>
    <Navbar />

    <div className='bg-slate-200 mt-12 md:w-[30rem] md:ml-44 p-5'>
    <form action=""  >
        <h1 className='text-center font-bold  text-2xl'>Update Task</h1>
        <label className='text-xl ' htmlFor="title">New Title :</label> &nbsp;
        <input className='rounded h-8 w-64' type="text" name="" id="" 
        // value={title} onChange={(e)=>setTitle(e.target.value)}
         /><br />

        <label className='text-xl ' htmlFor="description">New Description :</label>
        <textarea className='rounded h-8' name="" id="" 
        // value={description} onChange={(e)=>setDescription(e.target.value)}
        ></textarea><br />

        <label className='text-xl ' htmlFor="status">New Status :</label>
        <select className='rounded h-8 w-64' name="" id=""
        // value={status} onChange={(e)=>setStatus(e.target.value)}
        >
            <option  value="pendig">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
        </select><br />

        <label className='text-xl ' htmlFor="priority" > New Priority:</label>
        <select className='rounded h-8 w-64' name="" id=""
        // value={prioprity} onChange={(e)=>setPriority(e.target.value)}
        >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select><br />

        <label className='text-xl ' htmlFor="date">New Date :</label>
        <input className='rounded h-8 w-64' type="date" name="" id="" 
        // value={createdAt} onChange={(e)=>setCreatedAt(e.target.value)} 
        /><br />

        <button type='submit' className='bg-slate-700 p-2 ml-44 mt-5 mb-4 rounded text-white font-bold text-xl'>Submit</button>

    </form>
    </div>

    </>
  )
}

export default UpdateTask