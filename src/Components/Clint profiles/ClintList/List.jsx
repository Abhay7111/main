import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function List() {
     const [navItems, setNavItems] = useState([]);
     useEffect(() => {
          // Fetch all navigation items
          axios.get('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542')
              .then(response => {
                  setNavItems(response.data);
                  setLoading(false);
              })
              .catch(err => {
                  console.error('Error fetching nav items:', err);
                  setLoading(false);
              });
      }, []);
  return (
    <div>
     <ul className='p-2 bg-zinc-50 w-full sm:w-full sm:max-w-[80%] overflow-y-auto my-5 rounded-lg'>
                {navItems.map(item => (
                    <li key={item._id} className='flex items-center justify-between gap-10 py-1.5 w-full'>
                        <strong className='text-zinc-700 text-sm font-medium px-2 line-clamp-1 flex gap-3 items-center justify-start'> <span><img src={item.logo} alt="sorry" className='w-8 max-h-8 object-cover rounded-md' /></span> {item.name} :</strong>
                        <div className='flex items-center gap-3'>
                            <NavLink to={`/profile/${item._id}`} className={`text-sm px-2 py-1.5 bg-zinc-300 hover:bg-zinc-400 transition-all cursor-pointer rounded-md`}>Profile</NavLink>
                            <NavLink to={`/info`} className={`text-2xl w-5 h-5 font-semibold text-zinc-600 hover:text-zinc-800 bg-zinc-300 hover:bg-zinc-400 transition-all cursor-pointer rounded-full flex items-center justify-center`}><i class="ri-information-line"></i></NavLink>
                            </div>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default List