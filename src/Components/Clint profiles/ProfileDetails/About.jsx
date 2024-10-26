import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../../public/loading.png';

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://engn1-v1.onrender.com/getnav0132134542/${id}`)
      .then(response => {
        setAboutData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <img className='animate-spin size-5 object-cover' src={Loading} />;
  }

  if (!aboutData) {
    return <p>Sorry, data not found.</p>;
  }

  return (
    <div>
      <p className='w-full sm:w-[70%] p-5 rounded-xl text-sm font-sans'>{aboutData.about}</p>
      <div className='flex items-center justify-center list-none gap-3'>
        <a target='_blank' href={`https://github.com/${aboutData.githubuser}`} className='text-sm font-medium hover:scale-[1.1] flex items-center gap-1 transition-all text-zinc-500 hover:text-zinc-800'><i className="text-xl ri-github-fill"></i></a>
        <a target='_blank' href={`${aboutData.home}`} className='text-sm font-medium hover:scale-[1.1] flex items-center gap-1 transition-all text-zinc-500 hover:text-zinc-800'><i className="text-xl ri-git-repository-fill"></i></a>
        <a target='_blank' href={`https://`} className='text-sm font-medium hover:scale-[1.1] flex items-center gap-1 transition-all text-zinc-500 hover:text-zinc-800'><i className="text-xl ri-facebook-circle-fill"></i></a>
        <a target='_blank' href={`https://`} className='text-sm font-medium hover:scale-[1.1] flex items-center gap-1 transition-all text-zinc-500 hover:text-zinc-800'><i className="text-xl ri-instagram-fill"></i></a>
        <a target='_blank' href={`https://`} className='text-sm font-medium hover:scale-[1.1] flex items-center gap-1 transition-all text-zinc-500 hover:text-zinc-800'><i className="text-xl ri-youtube-fill"></i></a>
        <a target='_blank' href={`https://`} className='text-sm font-medium hover:scale-[1.1] flex items-center gap-1 transition-all text-zinc-500 hover:text-zinc-800'><i className="text-xl ri-linkedin-fill"></i></a>
      </div>
    </div>
  );
}

export default About;