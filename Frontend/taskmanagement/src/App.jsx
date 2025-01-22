import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import Alltasks from './Pages/Alltasks';
import UpdateTask from './Pages/UpdateTask';


const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>} />
    <Route path='/alltask' element={<Alltasks/>} />
    <Route path='/updatetask' element={<UpdateTask/>} />
    </>
    
  ))
  return (
    <>
    <RouterProvider router={router} />   
    </>
  )
}

export default App