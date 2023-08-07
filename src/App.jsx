import { useState } from 'react'
import { Outlet } from 'react-router-dom'
//Components
import NavBar from './components/NavBar'

function App() {  

  return (
    <div className='font-Poppins bg-[#DC0A2D] min-h-screen flex flex-col items-center'>            
      <div className='max-w-[1200px]'>              
        <NavBar/>      
        <Outlet/>
      </div>
    </div>
  )
}

export default App
