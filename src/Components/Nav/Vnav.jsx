import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Lnav from './Lnav';

function Vnav() {
     const {id } = useParams(); // Get the blog_ID from the route
  const [Vnav, setVnav] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     axios.get(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542/${id}`)
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
    <div className='w-full sm:w-20 h-fit sm:h-full bg-zinc-900 flex flex-row sm:flex-col border-b sm:border-r border-zinc-400 items-center justify-between pb-5 '>
     <ul className='flex flex-row sm:flex-col items-center justify-start gap-3 py-2 px-2'>
          <li><NavLink to={Vnav.home} className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-home-4-line text-xl font-medium text-zinc-100"></i></NavLink></li>
          <li><NavLink to={Vnav.about} className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-table-line text-xl font-medium text-zinc-100"></i></NavLink></li>
          <li><NavLink to={Vnav.price} className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-money-rupee-circle-line text-xl font-medium text-zinc-100"></i></NavLink></li>
          <li><NavLink to={Vnav.services} className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-service-line text-xl font-medium text-zinc-100"></i></NavLink></li>
          <li><NavLink to={Vnav.contact} className={({isActive})=>`${isActive ? "bg-zinc-600" : "bg-transparent"} p-1.5 rounded-md hover:bg-zinc-700/70 `}><i class="ri-contacts-line text-xl font-medium text-zinc-100"></i></NavLink></li>
    </ul>
    <NavLink to={`/profile/${Vnav._id}`}><div className='size-12 rounded-md flex items-center justify-center border border-zinc-600'><img src={Vnav.logo} alt="not found" className='w-[90%] max-h-[90%] object-cover rounded-md' /></div></NavLink>
    </div>
  )
}

export default Vnav