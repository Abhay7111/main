import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Lnav from './Lnav';

function Vnav() {
     const {id } = useParams(); // Get the blog_ID from the route
  const [Vnav, setVnav] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     axios.get(`https://engn1-v1.onrender.com/getnav0132134542/${id}`)
       .then(response => {
         setVnav(response.data);
         setLoading(false);
       })
       .catch(err => {
         console.log(err);
         setLoading(false);
       });
   }, [id]);

   if (loading) {
     return <p>Loading...</p>;
   }
 
   if (!Vnav) {
     return <Lnav/>;
   }

  return (
    <div className='w-full sm:w-20 h-fit sm:h-full bg-zinc-100 flex flex-row sm:flex-col border-b sm:border-r border-zinc-400 items-center justify-between py-3 sm:pb-5 sm:px-0 px-4 '>
     <ul className='flex flex-row sm:flex-col items-center justify-start gap-3 py-2 px-2'>
          <li><NavLink to={`/`} className={({isActive})=>`${isActive ? "bg-zinc-700 text-zinc-300 hover:text-zinc-800 transition-all" : "bg-transparent transition-all "} p-1.5 rounded-md hover:bg-zinc-700/20 `}><i class="ri-home-4-fill text-xl font-medium "></i></NavLink></li>
          <li><NavLink to={`/about`} className={({isActive})=>`${isActive ? "bg-zinc-700  text-zinc-300 hover:text-zinc-800 transition-all" : "bg-transparent transition-all "} p-1.5 rounded-md hover:bg-zinc-700/20 `}><i class="ri-table-fill text-xl font-medium "></i></NavLink></li>
          <li><NavLink to={`/price`} className={({isActive})=>`${isActive ? "bg-zinc-700  text-zinc-300 hover:text-zinc-800 transition-all" : "bg-transparent transition-all "} p-1.5 rounded-md hover:bg-zinc-700/20 `}><i class="ri-money-rupee-circle-fill text-xl font-medium "></i></NavLink></li>
          <li><NavLink to={`/services`} className={({isActive})=>`${isActive ? "bg-zinc-700  text-zinc-300 hover:text-zinc-800 transition-all" : "bg-transparent transition-all "} p-1.5 rounded-md hover:bg-zinc-700/20 `}><i class="ri-service-fill text-xl font-medium "></i></NavLink></li>
          <li><NavLink to={`/profile/${Vnav._id}/contact`} className={({isActive})=>`${isActive ? "bg-zinc-700  text-zinc-300 hover:text-zinc-800 transition-all" : "bg-transparent transition-all "} p-1.5 rounded-md hover:bg-zinc-700/20 `}><i class="ri-contacts-fill text-xl font-medium "></i></NavLink></li>
          <li><NavLink to={`/todo`} className={({isActive})=>`${isActive ? "bg-zinc-700  text-zinc-300 hover:text-zinc-800 transition-all" : "bg-transparent transition-all "} p-1.5 rounded-md hover:bg-zinc-700/20 `}><i class="ri-todo-fill text-xl font-medium "></i></NavLink></li>
    </ul>
    <NavLink to={`/profile/${Vnav._id}`}><div className='size-12 rounded-md flex items-center justify-center border border-zinc-600'><img src={Vnav.logo} alt="not found" className='w-[90%] max-h-[90%] object-cover rounded-md' /></div></NavLink>
    </div>
  )
}

export default Vnav