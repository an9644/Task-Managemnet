import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [status,setStatus]=useState('')
  const [prioprity,setPriority]=useState('')
  const [createdAt,setCreatedAt]=useState('')
  const navigate=useNavigate()

  const  handleSubmit=async (e)=>{
    e.preventDefault()

    const newtask= {title,description,status,prioprity,createdAt}

    const res= await  fetch("http://localhost:4040/addtask",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newtask) 
    })
    if(res.ok){
      alert("Task Added")
      navigate('/tasks')
    }   
  }
  return (
    <>

    <Navbar/>

    <div className='bg-slate-200 mt-12 md:w-[30rem] md:ml-44'>
    <form action="" onSubmit={handleSubmit} >
        <h1 className='text-center font-bold  text-2xl'>Add Task</h1>
        <label className='text-xl ' htmlFor="title">Task Title :</label> &nbsp;
        <input className='rounded h-8 w-64' type="text" name="" id="" 
        value={title} onChange={(e)=>setTitle(e.target.value)} /><br />

        <label className='text-xl ' htmlFor="description">Task Description :</label>
        <textarea className='rounded h-8' name="" id="" 
        value={description} onChange={(e)=>setDescription(e.target.value)}></textarea><br />

        <label className='text-xl ' htmlFor="status">Status :</label>
        <select className='rounded h-8 w-64' name="" id=""
        value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option  value="pendig">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
        </select><br />

        <label className='text-xl ' htmlFor="priority">Priority</label>
        <select className='rounded h-8 w-64' name="" id=""
        value={prioprity} onChange={(e)=>setPriority(e.target.value)}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select><br />

        <label className='text-xl ' htmlFor="date">Date :</label>
        <input className='rounded h-8 w-64' type="date" name="" id="" 
        value={createdAt} onChange={(e)=>setCreatedAt(e.target.value)} /><br />

        <button type='submit' className='bg-slate-700 p-2 ml-44 mt-5 mb-4 rounded text-white font-bold text-xl'>Submit</button>

    </form>
    </div>


    
    </>
  )
}

export default Home