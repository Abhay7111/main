import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Loder from '/Snooker.gif';

function Webnav() {
  const { id } = useParams();
  const [nav, setNav] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://engn1-v1.onrender.com/getnav0132134542/`)
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
    navigate(`/profile/${selectedId}`); // Navigate to the selected option's route
  };

  if (loading) {
    return <div><img src={Loder} className='rounded-full'/></div>;
  }

  if (!nav.length) {
    return <p>No website found</p>;
  }

  return (
     <form>
     <select 
       name='site-select' 
       onChange={handleOptionClick} 
       className='min-w-40 h-8 rounded-lg flex items-start justify-center px-2 py-1.5 outline-none cursor-pointer'>
       <option value="" disabled selected>Websites</option>
       <option value="../" >Main</option>
       {nav.map((navdata, index) => (
         <option key={index} value={navdata._id} className='py-1.5 font-medium text-sm cursor-pointer'>{navdata.name}</option>
       ))}
     </select>
   </form>
  );
}

export default Webnav;
