import React from 'react'
import { NavLink } from 'react-router-dom'

function Lnav() {
  return (
          <div className=' w-20 h-full bg-zinc-900 flex flex-col items-center justify-between pb-5 '>
     <ul className='flex flex-col items-center justify-start gap-3 py-2 px-2'>
          <li><NavLink to="/" className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-home-4-line text-xl font-medium text-zinc-100"></i></NavLink></li>
          <li><NavLink to="/about" className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-table-line text-xl font-medium text-zinc-100"></i></NavLink></li>
          <li><NavLink to="/price" className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-money-rupee-circle-line text-xl font-medium text-zinc-100"></i></NavLink></li>
          <li><NavLink to="/services" className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-service-line text-xl font-medium text-zinc-100"></i></NavLink></li>
          <li><NavLink to="/contact" className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-contacts-line text-xl font-medium text-zinc-100"></i></NavLink></li>
    </ul>
    <div className='size-12 rounded-full flex items-center justify-center'><img src="https://cdn.pixabay.com/photo/2016/10/12/23/22/owl-1736292_960_720.png" alt="not found" className='w-auto h-[90%] rounded-full' /></div>
    </div>
  )
}

export default Lnav