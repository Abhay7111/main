import React, { useState } from 'react'
import Servicesinput from '../../Inputs/Services'

function Services() {

    const [open, setOpen] = useState(false)

  return (
    <div className='w-full flex flex-col gap-5 p-2 rounded-lg '>
        <div className='w-full flex items-center justify-between'>
            <div></div>
            <div className='flex items-center justify-end gap-3'>
                <p onClick={()=>setOpen(true)} className='transition-all cursor-pointer text-sm font-medium px-3 py-1 border hover:border-zinc-400 rounded-full'>New service</p>
            </div>
        </div>
        <div className={`${open ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-full bg-zinc-50/50 backdrop-blur-sm overflow-hidden`}>
            <div className='relative flex flex-col items-center pt-10'>
                <i onClick={()=>setOpen(false)} class="ri-close-fill text-2xl cursor-pointer px-1 border border-transparent hover:border-zinc-400 rounded-full w-fit absolute top-3 right-3 hover:font-bold"></i>
                <div className='w-[70vw] h-[85vh] rounded-xl p-4 bg-zinc-200 border border-zinc-300 overflow-y-auto'>
                    <Servicesinput/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services