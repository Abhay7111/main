import React from 'react'

function Main() {
  return (
    <div className='w-full h-full bg-zinc-900 flex items-center justify-center'>
     {/* This is left Nav */}
          <div className='w-20 sm:w-32 h-full bg-zinc-900 border-r border-clr1 flex flex-col items-center justify-between'></div>
          {/* This is right display */}
          <div className='w-full h-full bg-zinc-900'>
               {/* This is Nav */}
               <div className='w-full h-20 border-b border-clr1'></div>
               {/* This is main display */}
               <div className='w-full bg-red-400/20 overflow-hidden overflow-y-auto calc-h-20'>
                    <div className='w-full h-full'></div>
                    <div className='w-full h-full bg-zinc-900 mt-5'></div>
               </div>
          </div>
    </div>
  )
}

export default Main