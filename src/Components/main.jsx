import React from 'react'
import Site from './Routs/Site'

function Main() {
  return (
    <div className='w-full h-full bg-zinc-900 flex items-center justify-center'>
     {/* This is left Nav */}
          <div className='w-20 h-full py-2 bg-zinc-900 border-r border-clr1 flex flex-col items-center justify-between'>
               <div className='w-fit max-h-[90vh] bg-green-400/0 flex flex-col items-center justify-start gap-2'>
                    <div className='size-10 border border-clr2 mb-10 rounded-lg flex items-center justify-center'>MN</div>
                    <div className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 cursor-pointer transition-all'><i class="ri-home-4-line"></i></div>
                    <div className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 bg-zinc-700 cursor-pointer transition-all'><i class="ri-pages-line"></i></div>
                    <div className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 cursor-pointer transition-all'><i class="ri-money-rupee-circle-line"></i></div>
                    <div className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 cursor-pointer transition-all'><i class="ri-contacts-line"></i></div>
               </div>
               <div className='w-fit max-h-[10vh]'>
                    <div className='size-10 border border-clr2 rounded-full overflow-hidden'></div>
               </div>
          </div>
          {/* This is right display */}
          <div className='w-full h-full bg-zinc-900'>
               {/* This is Nav */}
               <div className='w-full h-20 border-b border-clr1'></div>
               {/* This is main display */}
               <div className='w-full overflow-hidden overflow-y-auto calc-h-20'>
                    <Site/>
               </div>
          </div>
    </div>
  )
}

export default Main