import React from 'react'
import Bgvideo from '../Components/Bgvideo'
import { NavLink } from 'react-router-dom'
import Nav from '../Components/Nav'
import Hometexts from '../Components/Hometexts'

function Home() {
  return (
    <div className='w-full h-screen overflow-auto'>
     <div className='w-full h-screen fixed bg-transparent -z-0'><Bgvideo/></div>
     <div className='w-full h-full z-10 relative'>
          <div className='flex items-start justify-between fixed top-0 left-0 w-full'>
               <NavLink to={`/`} className={`text-4xl font-bold px-4`}>k72</NavLink>
               <Nav/>
          </div>
          <div className='md:pt-14 pt-25 '><Hometexts/></div>
     </div>
    </div>
  )
}

export default Home