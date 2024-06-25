import React from 'react'

function Main() {
  return (
    <div className='w-full h-full bg-zinc-900 flex items-center justify-center'>
     {/* This is left Nav */}
          <div className='w-20 h-full py-2 bg-zinc-900 border-r border-clr1 flex flex-col items-center justify-between'>
               <div className='w-fit max-h-[90vh] bg-green-400/0 flex flex-col items-center justify-start gap-2'>
                    <div className='size-10 border border-clr2 mb-10 rounded-lg flex items-center justify-center'>MN</div>
                    <div className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 bg-zinc-700 cursor-pointer transition-all'><i class="ri-home-4-line"></i></div>
                    <div className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 cursor-pointer transition-all'><i class="ri-pages-line"></i></div>
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
                    <div className='w-full h-auto bg-green-400/0  px-5'>
                    <div className='w-full h-full flex sm:flex-row flex-col gap-7 sm:gap-0 sm:items-center border-b border-clr1 justify-between py-5'>
                         <div className='flex flex-col items-start justify-center'>
                              <input placeholder='Sites' type="search" name="search" id="search-site" className='rounded-lg h-8 outline-blue-400 bg-zinc-800 text-zinc-100 px-3 text-sm font-normal border border-clr2' />
                              <ul className='flex sm:flex-row flex-col items-start sm:items-center justify-center sm:gap-5 mt-3'>
                                   <li className='font-light'>Owned by <a href="https://www.gaama.top/" target='_blank' className='font-medium'>Gaama.top</a></li>
                                   <li className='font-light'>Created by <a href="https://www.github.com/Abhay7111/" target='_blank' className='font-medium'>Abhay7111</a></li>
                                   <li className='font-light'>Access <a href="https://www.github.com/Abhay7111/" target='_blank' className='font-medium'>Any</a></li>
                                   <a className='py-2 px-4 mt-3 sm:m-0 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all border border-clr1 cursor-pointer'>Edit filters</a>
                              </ul>
                         </div>
                         <div className='flex flex-col items-start sm:items-end justify-center'>
                              <div className='text-center w-32 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-medium hover:bg-blue-500 transition-all cursor-pointer'> Contact me </div>
                              <ul className='flex sm:flex-row flex-col items-start sm:items-center justify-center gap-3 sm:gap-5 mt-3'>
                                   <li className='py-2 px-5 border border-clr1 rounded-lg cursor-pointer transition-all hover:bg-zinc-800'><i class="ri-youtube-line"></i> My Teachers <i class="ri-arrow-down-s-line"></i></li>
                                   <li className='flex gap-1'>
                                        <span className='size-10 rounded-lg flex items-center opacity-40 bg-zinc-800 hover:bg-zinc-700 justify-center text-2xl font-extralight cursor-pointer'><i class="ri-menu-5-line"></i></span>
                                        <span className='size-10 border border-clr2 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center justify-center text-2xl font-extralight cursor-pointer'><i class="ri-function-fill"></i></span>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className='w-full h-[100vh] mt-5'>None</div>
                    </div>
               </div>
          </div>
    </div>
  )
}

export default Main