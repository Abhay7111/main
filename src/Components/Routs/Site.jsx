import React from 'react'
import Sitecard from '../Cards/Sitecard'

function Site() {
     const sites = [
          {
               name:'gaama.top',
               Owned:'gaama.top',
               image:'https://img.freepik.com/free-vector/landing-page-template-with-web-design-concept_23-2147867627.jpg?t=st=1719331638~exp=1719335238~hmac=6f264662dbe98f9a29d3c3c2ce0a44542847e1cba8d15854b0a2194210e6ca85&w=740',
               url:'',
               platform:'Netlify',
          },
          {
               name:'gaama.top',
               Owned:'gaama.top',
               image:'https://img.freepik.com/free-photo/view-3d-computer-device-with-peripheral-devices_23-2150714047.jpg?t=st=1719332936~exp=1719336536~hmac=a78c13c3270a244eea55b0f53267a4bb52b0a52febd05679a4cb09fd5450019b&w=740',
               url:'',
               platform:'Netlify',
          },
          {
               name:'gaama.top',
               Owned:'gaama.top',
               image:'https://img.freepik.com/free-photo/view-3d-retro-computer-with-cathode-ray-tube_23-2150713957.jpg?t=st=1719332971~exp=1719336571~hmac=dce445fb1d2df1d90863c00d40e79add43d19b86d284f26fb6b92a02f1adeed6&w=740',
               url:'',
               platform:'Netlify',
          },
          {
               name:'gaama.top',
               Owned:'gaama.top',
               image:'https://img.freepik.com/free-photo/retro-computer-desk-arrangement_23-2150244353.jpg?t=st=1719332996~exp=1719336596~hmac=c3c983861ac8ea0e62a08b100d4d9d213e8440f040f08444dc0ca3fb835fb5da&w=826',
               url:'',
               platform:'Netlify',
          },
     ]
  return (
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
     <div className='w-full h-auto bg-red-400/20 mt-5 '>
     <div className='flex flex-wrap justify-start gap-1 gap-y-2'>
          {sites.map((items, index)=>(
               <Sitecard sites={items}/>
          ))}
     </div>
      </div>
     </div>
  )
}

export default Site