import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

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
     return <p>Blog not found</p>;
   }

  return (
    <div className=' w-20 h-full bg-green-400 flex flex-col items-center justify-between pb-5 '>
     <ul className='flex flex-col items-center justify-start gap-3 py-2 px-2'>
          <li><NavLink to={Vnav.home} className={({isActive})=>`${isActive ? "bg-yellow-400" : "bg-transparent"} p-1.5 rounded-md hover:bg-yellow-300/70 `}><i class="ri-home-4-line text-xl font-bold"></i></NavLink></li>
          <li><NavLink to={Vnav.about} className={({isActive})=>`${isActive ? "bg-yellow-400" : "bg-transparent"} p-1.5 rounded-md hover:bg-yellow-300/70 `}><i class="ri-table-line text-xl font-bold"></i></NavLink></li>
          <li><NavLink to={Vnav.price} className={({isActive})=>`${isActive ? "bg-yellow-400" : "bg-transparent"} p-1.5 rounded-md hover:bg-yellow-300/70 `}><i class="ri-money-rupee-circle-line text-xl font-bold"></i></NavLink></li>
          <li><NavLink to={Vnav.services} className={({isActive})=>`${isActive ? "bg-yellow-400" : "bg-transparent"} p-1.5 rounded-md hover:bg-yellow-300/70 `}><i class="ri-service-line text-xl font-bold"></i></NavLink></li>
          <li><NavLink to={Vnav.contact} className={({isActive})=>`${isActive ? "bg-yellow-400" : "bg-transparent"} p-1.5 rounded-md hover:bg-yellow-300/70 `}><i class="ri-contacts-line text-xl font-bold"></i></NavLink></li>
    </ul>
    <div className='size-12 rounded-full flex items-center justify-center'><img src={Vnav.logo} alt="not found" className='w-auto h-[90%] rounded-full' /></div>
    </div>
  )
}

export default Vnav