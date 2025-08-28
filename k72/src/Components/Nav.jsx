import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex relative items-center justify-end gap-4 text-lg uppercase font-bold w-35 md:w-80 transition-all duration-500 h-13 px-3 bg-[#101010] before:bg-[#d1fd67] before:absolute before:top-0 before:left-0 before:w-full before:h-0 hover:before:h-13 before:transition-all before:duration-500'>
     <div className='h-fit w-10 flex flex-col gap-2 items-end cursor-pointer relative'>
          <div className='w-[60%] h-[1px] bg-zinc-500 rounded-full'></div>
          <div className='w-[40%] h-[1px] bg-zinc-500 rounded-full'></div>
          <div className='w-[100%] h-[1px] bg-zinc-500 rounded-full'></div>
     </div>
    </div>
  )
}

export default Nav