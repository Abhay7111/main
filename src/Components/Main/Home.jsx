import React from 'react'
import Vnav from '../Nav/Vnav'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
     <div className='flex calc-h bg-red-400'>
          <Outlet/>
          <div> Home</div>
     </div>
  )
}

export default Home