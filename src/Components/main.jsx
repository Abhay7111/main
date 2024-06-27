import React, { useEffect } from 'react';
import Site from './Routs/Site';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from './Routs/Home';
import Contact from './Routs/Contact';
import Pricing from './Routs/Pricing';

function Main() {
     useEffect(()=>{
          const home = document.querySelector("#home");
          const site = document.querySelector("#site");
          const price = document.querySelector("#price");
          const contact = document.querySelector("#contact");

          home.addEventListener('click', ()=>{
               home.style.backgroundColor = "#3f3f46"
               site.style.backgroundColor = "transparent"
               price.style.backgroundColor = "transparent"
               contact.style.backgroundColor = "transparent"
          })
          site.addEventListener('click', ()=>{
               site.style.backgroundColor = "#3f3f46"
               home.style.backgroundColor = "transparent"
               price.style.backgroundColor = "transparent"
               contact.style.backgroundColor = "transparent"
          })
          price.addEventListener('click', ()=>{
               price.style.backgroundColor = "#3f3f46"
               site.style.backgroundColor = "transparent"
               home.style.backgroundColor = "transparent"
               contact.style.backgroundColor = "transparent"
          })
          contact.addEventListener('click', ()=>{
               contact.style.backgroundColor = "#3f3f46"
               price.style.backgroundColor = "transparent"
               site.style.backgroundColor = "transparent"
               home.style.backgroundColor = "transparent"
          })

     })
  return (
    <div className='w-full h-full bg-zinc-900 flex items-center justify-center'>
     {/* This is left Nav */}
          <div className='w-20 h-full py-2 bg-zinc-900 border-r border-clr1 flex flex-col items-center justify-between'>
               <div className='w-fit max-h-[90vh] bg-green-400/0 flex flex-col items-center justify-start gap-2'>
                    <Link to="#"><div className='size-10 border border-clr2 mb-10 rounded-lg flex items-center justify-center'>MN</div></Link>
                    <Link to="/dashboard/"><div id='home' className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5  bg-zinc-700 cursor-pointer transition-all'><i class="ri-home-4-line"></i></div></Link>
                    <Link to="/dashboard/site"><div id='site' className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 cursor-pointer transition-all'><i class="ri-pages-line"></i></div></Link>
                    <Link to="/dashboard/Pricing"><div id='price' className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 cursor-pointer transition-all'><i class="ri-money-rupee-circle-line"></i> </div></Link>
                    <Link to="/dashboard/Contact"><div id='contact' className='size-10 rounded-lg flex items-center justify-center text-xl hover:bg-zinc-50/5 cursor-pointer transition-all'><i class="ri-contacts-line"></i> </div></Link>
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
               <div className='w-full max-w-[1366px] overflow-hidden overflow-y-auto calc-h-20'>
                    <Routes>
                         <Route path='/' element={<Home/>} />
                         <Route path='site' element={<Site/>}/>
                         <Route path='contact' element={<Contact/>}/>
                         <Route path='pricing' element={<Pricing/>}/>
                         <Route path='*' element='404'/>
                    </Routes>
                    {/* Footer */}
               <div className='footer w-full mt-10 px-5 py-3 border-t border-clr1 flex flex-col gap-y-3'>
                    <ul className='flex items-center text-sm flex-wrap justify-start gap-1 font-medium'>
                         <li><a href="#" className='px-3 py-1 rounded-lg transition-all hover:bg-zinc-800'>Docs</a></li>
                         <li><a href="#" className='px-3 py-1 rounded-lg transition-all hover:bg-zinc-800'>Pricing</a></li>
                         <li><a href="#" className='px-3 py-1 rounded-lg transition-all hover:bg-zinc-800'>Support</a></li>
                         <li><a href="#" className='px-3 py-1 rounded-lg transition-all hover:bg-zinc-800'>Blog</a></li>
                         <li><a href="#" className='px-3 py-1 rounded-lg transition-all hover:bg-zinc-800'>Terms</a></li>
                         <li><a href="#" className='px-3 py-1 rounded-lg transition-all hover:bg-zinc-800'>Privacy</a></li>
                    </ul>
                    <p className='text-sm'>© 2024 <a href="https://www.gaama.top" className='hover:underline underline-offset-2'>gaama</a></p>
               </div>
               </div>
          </div>
    </div>
  )
}

export default Main