import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetail() {
  const {id } = useParams(); // Get the blog_ID from the route
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
    <div className='w-fit max-h-[87vh] border border-zinc-700 m-3'>
      <div className='flex sm:flex-row flex-col p-2 items-start gap-5 justify-start'>
          <div className='relative w-96 max-h-screen'>
            <a href={`https://${blog.domain}`}><img src={blog.logo} alt={`${blog.title} not uploaded an Image`} className='w-96 max-h-[83vh] hover:scale-[1.03] sm:hover:scale-[1.01] transition-cubic cursor-pointer sm:h-auto object-cover object-center' /></a>
          </div>
          <div className='min-w-96 text-zinc-100 flex flex-col gap-1'>
               <h1 className='text-2xl uppercase pb-3'>{blog.name}</h1>
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
