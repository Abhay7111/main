import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Newservice from './Newservice';

function Services() {
    
    const {id} = useParams();
    const [profile, setProfile] = useState();
    const [loding, setLoading] = useState();
    const [navItems, setNavItems] = useState([]);
    const [profileform, setProfileform] = useState()
    const [formData, setFormData] = useState({
        name: '',
        domain: '',
        logo: '',
        home: '',
        about: '',
        paid: '',
        remain: '',
        services: '',
        contact: '',
        youtube: '',
        facebook: '',
        linkedin: '',
        instagra: '',
        whatsap: '',
        address: '',
        email: '',
        date: '',
    });

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

    const handleUpdate = (id) => {
        axios.put(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542/${id}`, formData)
            .then(response => {
                setProfileform(navItems.map(item => item._id === id ? response.data : item));
                resetForm();
            })
            .catch(err => {
                console.error('Error updating nav item:', err);
            });
    };

    if(!profile){
        return <p>Loading... profile data</p>
   }
   if(loding){
        return <p>sorry Profile not found</p>
   }


  return (
    <div>
        <h1 className='text-xl font-medium flex items-center text-center gap-1'>Create your new service <span className='text-blue-800 uppercase'>{profile.name} </span></h1>
        <form className='w-full p-3 flex flex-col sm:flex-row items-center sm:items-start justify-start sm:justify-center flex-wrap'>
            <div className='flex flex-col items-start justify-center p-3 rounded-md'>
                <label htmlFor="servicename" className='text-sm font-medium'>Service name</label>
                <input type="text" name="servicename" id='servicename' placeholder='Servicename' className=' bg-transparent border-b-[1px] border-zinc-500 rounded-t-md px-2 py-1 outline-none text-sm'/>
            </div>
            <Newservice/>
        </form>
    </div>
  )
}

export default Services