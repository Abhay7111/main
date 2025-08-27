import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex items-center justify-end gap-4 text-lg uppercase font-bold w-80 bg-[#101010] px-4 py-3'>
     <div className='h-7 w-10 flex flex-col gap-2 items-end cursor-pointer'>
          <div className='w-[60%] h-[2px] bg-white'></div>
          <div className='w-[40%] h-[2px] bg-white'></div>
          <div className='w-[100%] h-[2px] bg-white'></div>
     </div>
    </div>
  )
}

export default Nav