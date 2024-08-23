import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Testingform() {
    const [navItems, setNavItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        logo: '',
        home: '',
        about: '',
        price: '',
        services: '',
        contact: ''
    });
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCreate = () => {
        // Create a new navigation item
        axios.post('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/postnav01d32q13qd45w4sf2', formData)
            .then(response => {
                setNavItems([...navItems, response.data]);
                setFormData({
                    name: '',
                    logo: '',
                    home: '',
                    about: '',
                    price: '',
                    services: '',
                    contact: ''
                });
            })
            .catch(err => {
                console.error('Error creating nav item:', err);
            });
    };

    const handleUpdate = (id) => {
        // Update an existing navigation item
        axios.put(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/updatenav0132134542/${id}`, formData)
            .then(response => {
                setNavItems(navItems.map(item => item._id === id ? response.data : item));
                setFormData({
                    name: '',
                    logo: '',
                    home: '',
                    about: '',
                    price: '',
                    services: '',
                    contact: ''
                });
                setEditingId(null);
            })
            .catch(err => {
                console.error('Error updating nav item:', err);
            });
    };

    const handleDelete = (id) => {
        // Ask for confirmation before deleting
        const confirmDelete = window.confirm('Are you sure you want to delete this navigation item?');

        if (confirmDelete) {
            // Delete a navigation item
            axios.delete(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/deletenav0132134542/${id}`)
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
        setFormData({
            name: item.name,
            logo: item.logo,
            home: item.home,
            about: item.about,
            price: item.price,
            services: item.services,
            contact: item.contact
        });
        setEditingId(item._id);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul className='p-2 bg-zinc-50 w-full sm:w-fit sm:max-[40vw] max-h-[350px] overflow-y-auto my-5 rounded-lg'>
                {navItems.map(item => (
                    <li key={item._id} className='flex items-center justify-between gap-10 py-1.5 w-full'>
                        <strong className='text-zinc-700 text-sm font-medium px-2 line-clamp-1'>{item.name} :</strong>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => startEditing(item)} className='px-5 py-1.5 rounded-md bg-blue-400 hover:bg-blue-500 transition-all text-sm font-medium'>Edit</button>
                            <button onClick={() => handleDelete(item._id)} className='px-4 py-1.5 rounded-md bg-red-400 hover:bg-red-500 transition-all text-sm font-medium'>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <form className='p-3 flex flex-col items-start justify-start gap-5 w-96 sm:w-[50vw] m-3 rounded-xl'>
                <h1 className='text-[11vw] sm:text-[3.2vw] text-zinc-200 font-medium'>Manage Navigation Items</h1>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="name" className='cursor-pointer font-semibold'>User name</label>
                    <input
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
                    <label htmlFor="logo" className='cursor-pointer font-semibold'>Logo</label>
                    <input
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
                    <input
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='about'
                        name='about'
                        value={formData.about}
                        onChange={handleInputChange}
                        placeholder='About routes'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="price" className='cursor-pointer font-semibold'>Price</label>
                    <input
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
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
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='contact'
                        name='contact'
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder='Contact routes'
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
