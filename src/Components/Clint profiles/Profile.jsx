import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

function Profile() {

     const [open, setOpen] =useState(false)
     const {id} = useParams();
     const [profile, setProfile] = useState();
     const [loding, setLoading] = useState();

     useEffect(()=> {
          axios.get(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542/${id}`)
          .then(response => {
               setProfile(response.data);
               setLoading(false);
          })
          .catch(err => {
               setLoading(false)
          })
     }, [id])

     if(!profile){
          return <p>Loading... profile data</p>
     }
     if(loding){
          return <p>sorry Profile not found</p>
     }


  return (
    <div className='w-full h-auto text-zinc-800 bg-zinc-100 flex flex-col items-center justify-start sm:flex-row sm:items-start sm:justify-center px-2 sm:px-5'>
     <div className='w-full sm:w-[70vw] py-3 flex flex-col gap-5 items-center justify-start sm:items-center sm:justify-between px-2'>
          <div className='w-full flex flex-col gap-5 items-center'>
               <div className='w-full sm:w-[35vw] rounded-xl   flex flex-col sm:flex-row items-start sm:items-start justify-start gap-10'>
                    <img src={profile.logo} alt="Profile image not found" className='size-40 object-cover rounded-full' />
                    <div className='flex flex-col gap-4'>
                         <h1 className='text-2xl mt-2 font-bold first-letter:uppercase line-clamp-1'>{profile.name}</h1>
                         <p>India</p>
                         <div className='flex items-center justify-start gap-3 relative w-fit'>
                              <NavLink to={""} className={`px-5 py-1.5 hover:border-zinc-300 transition-all border-[1px] rounded-full text-sm font-medium`}>Edit profile</NavLink> 
                              <i onClick={()=>setOpen(true)} className="ri-more-fill cursor-pointer px-2 py-1 border hover:border-zinc-300 rounded-full relative"></i>
                              <div onMouseLeave={()=>setOpen(false)} className={`${open ? ' flex flex-col gap-1 top-full right-0 sm:-right-full border hover:border-zinc-300 w-40 bg-zinc-200 rounded-lg z-[99]' :'hidden'} absolute p-2`}>
                                   <NavLink to={''} className={'text-xs font-normal hover:bg-zinc-300 px-2 py-1 rounded-md'}>Edit your post</NavLink>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='w-full flex items-center justify-start gap-5'>
                    <NavLink to={""} className={`px-3 py-1 hover:border-zinc-400 transition-all border-[1px] rounded-full text-sm font-semibold`}>Services</NavLink>
                    <NavLink to={"about"} className={`px-3 py-1 hover:border-zinc-400 transition-all border-[1px] rounded-full text-sm font-semibold`}>About</NavLink>
                    <NavLink to={"readme"} className={`px-3 py-1 hover:border-zinc-400 transition-all border-[1px] rounded-full text-sm font-semibold`}>Read me</NavLink>
               </div>
          </div>
          <div className='w-full'>
               <Outlet/>
          </div>
     </div>
     
    </div>
  )
}

export default Profile