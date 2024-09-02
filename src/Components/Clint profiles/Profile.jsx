import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
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
    <div className='w-full h-auto text-zinc-100 flex flex-col items-center justify-start sm:flex-row sm:items-start sm:justify-between px-2 sm:px-5'>
     <div className='w-full sm:w-[50vw] py-3 flex flex-col gap-3 items-center justify-start sm:flex-row sm:items-start sm:justify-between px-2'>
          <div className='max-w-72'>
               <div className='w-full rounded-2xl flex items-center justify-center overflow-hidden'>
                    <img src={profile.logo} alt="Profile image not found" className='w-full h-auto object-cover' />
               </div>
               <h1 className='text-2xl mt-2 font-medium first-letter:uppercase line-clamp-1'>{profile.name}</h1>
          </div>
          <div className='w-96 p-2 flex flex-col gap-1.5'>
               <p className='opacity-85'>{profile.domain}</p>
               <a href={`mailto:${profile.email}`}>{profile.email}</a>
               <div>
                    <p>About :</p>
                    <p className='text-sm opacity-85 font-light tracking-wide'>{profile.about}</p>
               </div>
               <p className='font-medium'>Contact : <span className='opacity-85 font-light'><a href={`tel:${profile.contact}`}>{profile.contact}</a></span></p>
               <div>
                   <p className='font-medium'>Address :</p> 
                   <p className='text-sm opacity-85 font-light tracking-wide'>{profile.address}</p>
               </div>
               <div className='flex items-center justify-start gap-2'>
                    <a href={`${profile.youtube}`} target='_blank' className='size-7 bg-zinc-700 rounded-md flex items-center justify-center'><i class="ri-youtube-fill"></i></a>
                    <a href={`${profile.facebook}`} target='_blank' className='size-7 bg-zinc-700 rounded-md flex items-center justify-center'><i class="ri-facebook-fill"></i></a>
                    <a href={`${profile.linkedin}`} target='_blank' className='size-7 bg-zinc-700 rounded-md flex items-center justify-center'><i class="ri-linkedin-fill"></i></a>
                    <a href={`${profile.instagram}`} target='_blank' className='size-7 bg-zinc-700 rounded-md flex items-center justify-center'><i class="ri-instagram-fill"></i></a>
                    <a href={`${profile.whatsapp}`} target='_blank' className='size-7 bg-zinc-700 rounded-md flex items-center justify-center'><i class="ri-whatsapp-fill"></i></a>
                    <a href={`https://${profile.domain}`} target='_blank' className='size-7 bg-zinc-700 rounded-md flex items-center justify-center'><i class="ri-link-m"></i></a>
               </div>
          </div>
     </div>
     
    </div>
  )
}

export default Profile