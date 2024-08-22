import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function MaiNnav() {
  const { id } = useParams();
  const [nav, setNav] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542`)
      .then(response => {
        setNav(response.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  const handleOptionClick = (event) => {
    const selectedId = event.target.value;
    navigate(`/getnav0132134542/${selectedId}`); // Navigate to the selected option's route
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!nav.length) {
    return <p>No navigation items found</p>;
  }

  return (
    <div className='w-full h-14 bg-zinc-200 flex items-center justify-between px-5'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png" alt="Logo" className='h-10 w-auto object-cover' />
      </div>
      <div>
        <ul className='flex gap-3 items-center text-sm font-medium'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Price</a></li>
        </ul>
      </div>
      <form>
        <select 
          name='site-select' 
          onChange={handleOptionClick} 
          className='min-w-40 h-8 rounded-lg flex items-start justify-center px-2 py-1.5 outline-none cursor-pointer'>
          <option value="" disabled selected>Select an option</option>
          {nav.map((navdata, index) => (
            <option key={index} value={navdata._id} className='py-1.5 font-medium text-sm cursor-pointer'>{navdata._id}</option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default MaiNnav;
