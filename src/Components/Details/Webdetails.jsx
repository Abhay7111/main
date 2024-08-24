import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetail() {
  const {id } = useParams(); // Get the data_ID from the route
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542/${id}`)
      .then(response => {
        setBlog(response.data);
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

  if (!blog) {
    return <p>Website not found</p>;
  }

  return (
    <div className='w-full h-fit border border-zinc-700 rounded-md'>
      <div className='flex sm:flex-col flex-col p-3 items-center gap-5 justify-start'>
          <div className='relative w-full'>
            <NavLink to={`/profile/${blog._id}`}><img src={blog.logo} alt={`${blog.title} not uploaded an Image`} className='w-full max-h-[49vh] bg-zinc-800 rounded-md hover:scale-[1.03] sm:hover:scale-[1.01] transition-cubic cursor-pointer sm:h-auto object-cover object-center' /></NavLink>
          </div>
          <div className='w-full overflow-hidden overflow-y-auto text-zinc-100 flex flex-col gap-1'>
               <NavLink target='_block' to={`https://${blog.domain}`} className='text-2xl uppercase pb-3 font-medium'>{blog.name}</NavLink>
               <p className='text-sm flex flex-nowrap font-medium gap-3'>domain: <a href={`https://${blog.domain}`} target='_blank' className='font-light break-words text-wrap '>{blog.domain}</a></p>
               <p className='text-sm flex flex-nowrap font-medium gap-3'>home: <p className='font-light break-words text-wrap '>{blog.home}</p></p>
               <p className='text-sm flex flex-nowrap font-medium gap-3'>contact: <p className='font-light break-words text-wrap '>{blog.contact}</p></p>
               <p className='text-sm flex flex-nowrap font-medium gap-3'>about: <p className='font-light break-words text-wrap '>{blog.about}</p></p>
               <p className='text-sm flex flex-nowrap font-medium gap-3'>price: <p className='font-light break-words text-wrap '>{blog.price}</p></p>
               <p className='text-sm flex flex-nowrap font-medium gap-3'>services: <p className='font-light break-words text-wrap '>{blog.services}</p></p>
               <p className='text-sm flex flex-nowrap break-words text-wrap font-medium gap-3'>logo: <a href={blog.logo} target='_blank' className='font-light break-words text-wrap '>{blog.logo}</a></p>
          </div>
        </div>
    </div>
  );
}

export default BlogDetail;
