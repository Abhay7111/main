import React from 'react'
import { NavLink } from 'react-router-dom'
import Webnav from './Webnav'

function Nav() {
  return (
     <div className='w-full h-14 bg-zinc-200 flex items-center justify-between px-5'>
     <div>
       <img src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png" alt="Logo" className='h-10 w-auto object-cover' />
     </div>
     <div>
       <ul className='flex gap-3 items-center text-sm font-medium'>
         <li><NavLink to="/">Home</NavLink></li>
         <li><NavLink to="/About">About</NavLink></li>
         <li><NavLink to="/Services">Services</NavLink></li>
         <li><NavLink to="/Contact">Contact</NavLink></li>
         <li><NavLink to="/Price">Price</NavLink></li>
         <li><NavLink to="form">Form</NavLink></li>
       </ul>
     </div>
     <div className='min-w-44'>
     <Webnav/>
     </div>
   </div>
  )
}

export default Nav