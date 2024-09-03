import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Testingform() {
    const [navItems, setNavItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        domain: '',
        logo: '',
        home: '',
        about: '',
        price: '',
        services: '',
        contact: '',
        youtube: '',
        facebook: '',
        linkedin: '',
        instagra: '',
        whatsap: '',
        address: '',
        email: '',
        date: '',
    });
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    // Fetch all navigation items
    useEffect(() => {
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

    // Calculate the sum of all prices whenever navItems changes
    useEffect(() => {
        const sum = navItems.reduce((total, item) => total + parseFloat(item.price || 0), 0);
        setTotalPrice(sum);
    }, [navItems]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const resetForm = () => {
        setFormData({
            name: '',
            domain: '',
            logo: '',
            home: '',
            about: '',
            price: '',
            services: '',
            contact: '',
            youtube: '',
            facebook: '',
            linkedin: '',
            instagra: '',
            whatsap: '',
            address: '',
            email: '',
            date: '',
        });
        setEditingId(null);
    };

    const handleCreate = () => {
        axios.post('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/postnav01d32q13qd45w4sf2', formData)
            .then(response => {
                setNavItems([...navItems, response.data]);
                resetForm();
            })
            .catch(err => {
                console.error('Error creating nav item:', err);
            });
    };

    const handleUpdate = (id) => {
        axios.put(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542/${id}`, formData)
            .then(response => {
                setNavItems(navItems.map(item => item._id === id ? response.data : item));
                resetForm();
            })
            .catch(err => {
                console.error('Error updating nav item:', err);
            });
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this navigation item?')) {
            axios.delete(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/getnav0132134542/${id}`)
                .then(() => {
                    setNavItems(navItems.filter(item => item._id !== id));
                    alert('Navigation item deleted successfully!');
                })
                .catch(err => {
                    console.error('Error deleting nav item:', err);
                    alert('Failed to delete navigation item. Please try again.');
                });
        } else {
            alert('Deletion canceled.');
        }
    };

    const startEditing = (item) => {
        setFormData(item);
        setEditingId(item._id);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul className='p-2 bg-gradient-to-l to-[#ddb9ce] from-[#fab3b2] w-full sm:w-full sm:max-w-[80%] max-h-[55vh] overflow-y-auto my-5 rounded-lg'>
                <div className='flex items-center justify-between px-1 pb-2'>
                    <p className='text-xs'>No. of clients: <span className='font-bold text-sm'>{navItems.length}</span></p>
                    <p className='text-xs'>Total Paid: <span className='font-bold'>₹{totalPrice}</span></p>
                </div>
                {navItems.map(item => (
                    <li key={item._id} className='flex items-center justify-between gap-10 py-1.5 w-full border-b border-zinc-400'>
                        <a target='_blank' href={`https://${item.domain}`} rel="noreferrer">
                            <strong className='text-zinc-700 text-sm font-medium px-2 line-clamp-1 flex gap-3 items-center justify-start flex-nowrap'>
                                <span>
                                    <img src={item.logo} alt="logo" className='w-8 max-h-8 object-cover rounded-md' />
                                </span>
                                <span className=' max-w-40 sm:max-w-fit line-clamp-1'>{item.domain}</span>
                            </strong>
                        </a>
                        <div className='flex items-center gap-1'>
                            <p title={`Last updated ${item.date}`} className='text-xs font-bold line-clamp-1 max-w-16 cursor-default text-end'>
                                <span className='font-medium text-xs'>{item.date}</span>
                            </p>
                            <span className='flex items-center justify-between gap-1.5 w-8.5'>
                                <button title='Edit Client' onClick={() => startEditing(item)} className='size-3.5 rounded-full bg-blue-400/80 hover:bg-blue-500 transition-all text-xs font-medium text-zinc-600'></button>
                                <button title='Delete Client' onClick={() => handleDelete(item._id)} className='size-3.5 rounded-full bg-red-400 hover:bg-red-500 transition-all text-xs font-medium text-zinc-600'></button>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <form className='p-3 flex flex-col items-start justify-start gap-5 w-[95%] sm:w-[80%] m-3 rounded-xl'>
                <h1 className='text-[6.5vw] sm:text-[3.2vw] text-zinc-200 font-medium'>Manage your clint data</h1>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="name" className='cursor-pointer font-semibold'>Clint name</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Username'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="domain" className='cursor-pointer font-semibold'>Clint domain</label>
                    <input
                        required
                        className='bg-transparent lowercase border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='domain'
                        name='domain'
                        value={formData.domain}
                        onChange={handleInputChange}
                        placeholder='domain'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="email" className='cursor-pointer font-semibold'>Clint email</label>
                    <input
                        required
                        className='bg-transparent lowercase border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="email"
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='email'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="logo" className='cursor-pointer font-semibold'>Clint Logo</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='logo'
                        name='logo'
                        value={formData.logo}
                        onChange={handleInputChange}
                        placeholder='Logo URL'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="home" className='cursor-pointer font-semibold'>Home</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='home'
                        name='home'
                        value={formData.home}
                        onChange={handleInputChange}
                        placeholder='Home routes'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="about" className='cursor-pointer font-semibold'>About</label>
                    <textarea
                        required
                        className='bg-transparent min-h-40 border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='about'
                        name='about'
                        value={formData.about}
                        onChange={handleInputChange}
                        placeholder='About business'
                    >
                    </textarea>
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="price" className='cursor-pointer font-semibold'>Price</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="number"
                        id='price'
                        name='price'
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder='Price routes'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="services" className='cursor-pointer font-semibold'>Services</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='services'
                        name='services'
                        value={formData.services}
                        onChange={handleInputChange}
                        placeholder='Services routes'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="contact" className='cursor-pointer font-semibold'>Contact</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="tel"
                        id='contact'
                        name='contact'
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder='Contact routes'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="address" className='cursor-pointer font-semibold'>Address</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='address'
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder='Put clint address here'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="date" className='cursor-pointer font-semibold'>Date</label>
                    <input
                        required
                        className='bg-transparent w-fit border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="date"
                        id='date'
                        name='date'
                        value={formData.date}
                        onChange={handleInputChange}
                        title=''
                    />
                </div>
                {editingId ? (
                    <button onClick={() => handleUpdate(editingId)} className='px-3 py-1.5 rounded-md bg-green-400 hover:bg-green-500 transition-all text-sm font-medium'>Update</button>
                ) : (
                    <button onClick={handleCreate} className='px-3 py-1.5 rounded-md bg-green-400 hover:bg-green-500 transition-all text-sm font-medium'>Create</button>
                )}
            </form>
        </div>
    );
}

export default Testingform;
