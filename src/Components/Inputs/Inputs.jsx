import React, { useState } from 'react';
import axios from 'axios';

function Inputs() {
     const [logo, setLogo] = useState('');
     const [home, setHome] = useState('');
     const [contact, setContact] = useState('');
     const [about, setAbout] = useState('');
     const [price, setPrice] = useState('');
     const [services, setServices] = useState('');
     const [name, setName] = useState('');
     const [domain, setDomain] = useState('');
     const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      logo: logo,
      home: home,
      contact: contact,
      about: about,
      price: price,
      services: services,
      name: name,
      domain: domain,
    };

    axios.post('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/postnav01d32q13qd45w4sf2', blogData)
      .then(response => {
        setMessage('posted successfully!');
        // Clear the form
        setLogo('');
        setHome('');
        setAbout('');
        setContact('');
        setPrice('');
        setServices('');
        setName('');
        setDomain('');
      })
      .catch(error => {
        console.error('There was an error posting', error);
        setMessage('Error posting. Please try again.');
      });
  };
  return (
    <div className='w-full'>
     <form action="" method="post" onSubmit={handleSubmit} className='p-3 flex flex-col items-start justify-start gap-5  w-96 sm:w-[600px] m-3 rounded-xl'>
          <div className='bg-zinc-200 p-5 rounded-lg flex flex-col gap-2 w-full'>
               <label htmlFor="name" className='cursor-pointer font-semibold'>User name</label>
               <input  className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm' type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Username' />
          </div>
          <div className='bg-zinc-200 p-5 rounded-lg flex flex-col gap-2 w-full'>
               <label htmlFor="domain" className='cursor-pointer font-semibold'>User domain</label>
               <input  className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm' type="text" id='domain' value={domain} onChange={(e) => setDomain(e.target.value)} placeholder='Domain' />
          </div>
          <div className='bg-zinc-200 p-5 rounded-lg flex flex-col gap-2 w-full'>
               <label htmlFor="logo" className='cursor-pointer font-semibold'>Logo</label>
               <input  className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm' type="text" id='logo' value={logo} onChange={(e) => setLogo(e.target.value)} placeholder='Logo URL' />
          </div>
          <div className='bg-zinc-200 p-5 rounded-lg flex flex-col gap-2 w-full'>
               <label htmlFor="home" className='cursor-pointer font-semibold'>Home</label>
               <input  className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm' type="text" id='home' value={home} onChange={(e) => setHome(e.target.value)} placeholder='Home routes' />
          </div>
          <div className='bg-zinc-200 p-5 rounded-lg flex flex-col gap-2 w-full'>
               <label htmlFor="about" className='cursor-pointer font-semibold'>About</label>
               <input  className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm' type="text" id='about' value={about} onChange={(e) => setAbout(e.target.value)} placeholder='About routes' />
          </div>
          <div className='bg-zinc-200 p-5 rounded-lg flex flex-col gap-2 w-full'>
               <label htmlFor="price" className='cursor-pointer font-semibold'>Price</label>
               <input  className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm' type="text" id='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price routes' />
          </div>
          <div className='bg-zinc-200 p-5 rounded-lg flex flex-col gap-2 w-full'>
               <label htmlFor="services" className='cursor-pointer font-semibold'>services</label>
               <input  className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm' type="text" id='services' value={services} onChange={(e) => setServices(e.target.value)} placeholder='Services routes' />
          </div>
          <div className='bg-zinc-200 p-5 rounded-lg flex flex-col gap-2 w-full'>
               <label htmlFor="contact" className='cursor-pointer font-semibold'>Contact</label>
               <input  className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm' type="text" id='contact' value={contact} onChange={(e) => setContact(e.target.value)} placeholder='Contact routes' />
          </div>
          <div className='flex w-full items-center justify-between'>
               <button type="submit" className='px-4 py-1.5 bg-green-400 rounded-lg font-semibold hover:bg-green-500 transition-all'>Submit</button>
               <button type="reset" className='text-blue-600 text-sm'>Clear form</button>
          </div>
          {message && <p className="mb-4 text-red-500">{message}</p>}
     </form>
    </div>
  )
}

export default Inputs