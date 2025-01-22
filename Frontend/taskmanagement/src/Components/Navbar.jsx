import React from 'react'

const Navbar = () => {
  return (
    <>

        <div className='h-16 bg-slate-700 text-white text-4xl font-bold  '>
            <h1 className='p-3 text-center '>Task Management</h1>
        </div>

    <div className=' mt-5 bg-slate-400 h-16  flex justify-center font-serif  text-xl'>

        <ul className=' flex flex-row mt-4 gap-5'>
            <a href='/'>Add Task</a>
            <a href='/alltask'>All Task</a>
        </ul>
    </div>
    </>
  )
}

export default Navbar