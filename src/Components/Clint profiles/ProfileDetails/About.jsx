import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../../../public/loading.png'

function About() {

  const [open, setOpen] =useState(false)
     const {id} = useParams();
     const [aboutdata, setAbout] = useState();
     const [loding, setLoading] = useState();

     useEffect(()=> {
          axios.get(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542/${id}`)
          .then(response => {
               setAbout(response.data);
               setLoading(false);
          })
          .catch(err => {
               setLoading(false)
          })
     }, [id])

     if(!aboutdata){
          return <img className='animate-spin size-5 object-cover' src={Loading} />
     }
     if(loding){
          return <p>Sorry data not found</p>
     }


  return (
    <div>
      <p className='w-full sm:w-[70%] p-5 rounded-xl text-sm font-sans'>{aboutdata.about}</p>
    </div>
  )
}

export default About