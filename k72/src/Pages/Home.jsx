import React from 'react'
import Bgvideo from '../Components/Bgvideo'
import { NavLink } from 'react-router-dom'
import Nav from '../Components/Nav'

function Home() {
  return (
    <div className='w-full h-screen overflow-auto'>
     <div className='w-full h-screen fixed bg-transparent -z-0'><Bgvideo/></div>
     <div className='w-full h-full bg-red-400/30 z-10 relative'>
          <div className='flex items-start justify-between'>
               <NavLink to={`/`} className={`text-4xl font-bold px-4`}>k72</NavLink>
               <Nav/>
          </div>
     </div>
    </div>
  )
}

export default Home