import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function List() {
     const [navItems, setNavItems] = useState([]);
     const [totalPrice, setTotalPrice] = useState(0);

     useEffect(() => {
          axios.get('https://engn1-v1.onrender.com/getnav0132134542')
               .then(response => {
                    setNavItems(response.data);
               })
               .catch(error => {
                    console.error('Error fetching data:', error);
               });
     }, []); // Empty dependency array to run only once on component mount

     // Calculate the sum of all prices whenever navItems changes
     useEffect(() => {
          const sum = navItems.reduce((total, item) => total + parseInt(item.paid || 0), 0);
          setTotalPrice(sum);
     }, [navItems]);

     return (
          <div>
               <ul className='p-2 sm:p-5 w-full sm:w-full overflow-y-auto my-5 rounded-lg flex-wrap flex flex-col sm:flex-row gap-2 sm:gap-3 items-center sm:items-start justify-center'>
                    <div>
                         <div className='p-3 flex items-start justify-between bg-red-200 w-[90vw] rounded-xl'>
                              <p className='text-sm'>All Clients : <span className='font-medium'>{navItems.length}</span></p>
                              <p className='text-xs sm:max-w-[50%] max-w-[75%] flex gap-5'>
                                   <span className='line-clamp-1'>Total Paid: <span className='font-bold text-sm'>₹{totalPrice}</span></span>
                                   <NavLink to={`/info`} title='info' className={`text-2xl w-5 h-5 text-zinc-600 hover:text-zinc-800 bg-zinc-300 hover:bg-zinc-400 transition-all cursor-pointer rounded-full flex items-center justify-center`}>
                                        <i className="ri-information-line"></i>
                                   </NavLink>
                              </p>
                         </div>
                    </div>
                    {navItems.map(item => (
                         <li key={item._id} className='w-[90vw] relative sm:w-96 h-40 sm:h-52 bg-red-200 rounded-xl p-2 flex flex-col items-center gap-1 justify-start py-2'>
                              <div className='w-full h-10 relative flex items-center justify-between'>
                                   <NavLink to={`/profile/${item._id}`} className={`size-10 rounded-full overflow-hidden hover:scale-[1.1] transition-all`}>
                                        <img src={item.logo} alt={item.name} className='size-10 scale-[1.05] border-none outline-none rounded-full flex items-center justify-center object-cover object-center bg-[#226fef]/40' />
                                   </NavLink>
                                   <div className='flex items-center gap-3'>
                                        <span className='text-[11px] font-medium w-fit text-green-600 flex items-center justify-center'>
                                             <i className="ri-money-rupee-circle-fill text-xs"></i>{item.paid}
                                        </span>
                                        <a href={`https://${item.domain}`} target="_blank" rel="noopener noreferrer" className='px-2 py-0.5 rounded-full border hover:border-zinc-200\70'>
                                             <i className="ri-external-link-fill text-sm"></i>
                                        </a>
                                   </div>
                              </div>
                              <h1 className='w-full text-md first-letter:uppercase font-bold'>{item.name}</h1>
                              <p className='line-clamp-4 sm:line-clamp-[7] text-xs w-full px-1.5'>{item.about}</p>
                         </li>
                    ))}
               </ul>
          </div>
     )
}

export default List