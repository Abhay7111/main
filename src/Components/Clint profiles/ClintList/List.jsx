import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function List() {
     const [navItems, setNavItems] = useState([]);
     useEffect(() => {
          axios.get('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542')
              .then(response => {setNavItems(response.data);})
      });
      const [totalPrice, setTotalPrice] = useState(0);

       // Calculate the sum of all prices whenever navItems changes
    useEffect(() => {
     const sum = navItems.reduce((total, item) => total + parseFloat(item.price || 0), 0);
     setTotalPrice(sum);
 }, [navItems]);

 const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
 };
      

  return (
    <div>
     <ul className='p-2 bg-zinc-50 w-full sm:w-full sm:max-w-[80%] overflow-y-auto my-5 rounded-lg'>
          <div className='pb-2 flex items-center justify-between'>
               <p className='text-sm'>Total Clints : <span className='font-medium'>{navItems.length}</span></p>
               <p className='text-xs sm:max-w-[50%] max-w-[75%] flex gap-5'><span className='line-clamp-1'>Total Paid: <span className='font-bold text-sm'>₹{totalPrice}</span></span><NavLink to={`/info`} className={`text-2xl w-5 h-5 text-zinc-600 hover:text-zinc-800 bg-zinc-300 hover:bg-zinc-400 transition-all cursor-pointer rounded-full flex items-center justify-center`}><i class="ri-information-line"></i></NavLink></p>
          </div>
                {navItems.map(item => (
                    <li key={item._id} className='flex items-center justify-between gap-10 py-1.5 w-full'>
                         <strong className='text-zinc-700 text-sm font-medium px-2 line-clamp-1 flex gap-3 items-center justify-start'> <span><NavLink to={`/profile/${item._id}`}><img src={item.logo} alt="sorry" className='w-8 max-h-8 object-cover rounded-md' /></NavLink></span> {item.domain}</strong>
                         <p className='text-xs line-clamp-1 w-16'><span className='font-bold'>₹ {item.price}</span></p>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default List