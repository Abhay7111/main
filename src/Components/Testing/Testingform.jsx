import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Testingform() {
    const [navItems, setNavItems] = useState([]);
    const [formData, setFormData] = useState({ name: '', link: '' });
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch all navigation items
        axios.get('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app//getnav0132134542')
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
        axios.post('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app//postnav01d32q13qd45w4sf2', formData)
            .then(response => {
                setNavItems([...navItems, response.data]);
                setFormData({ name: '', link: '' });
            })
            .catch(err => {
                console.error('Error creating nav item:', err);
            });
    };

    const handleUpdate = (id) => {
        // Update an existing navigation item
        axios.put(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app//getnav0132134542/${id}`, formData)
            .then(response => {
                setNavItems(navItems.map(item => item._id === id ? response.data : item));
                setFormData({ name: '', link: '' });
                setEditingId(null);
            })
            .catch(err => {
                console.error('Error updating nav item:', err);
            });
    };

    const handleDelete = (id) => {
        // Delete a navigation item
        axios.delete(`https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app//getnav0132134542/${id}`)
            .then(() => {
                setNavItems(navItems.filter(item => item._id !== id));
            })
            .catch(err => {
                console.error('Error deleting nav item:', err);
            });
    };

    const startEditing = (item) => {
        setFormData({ name: item.name, link: item.link });
        setEditingId(item._id);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Manage Navigation Items</h1>
            
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                placeholder="Name" 
            />
            <input 
                type="text" 
                name="link" 
                value={formData.link} 
                onChange={handleInputChange} 
                placeholder="Link" 
            />
            
            {editingId ? (
                <button onClick={() => handleUpdate(editingId)}>Update</button>
            ) : (
                <button onClick={handleCreate}>Create</button>
            )}

            <ul>
                {navItems.map(item => (
                    <li key={item._id}>
                        <strong>{item.name}</strong>: {item.link}
                        <button onClick={() => startEditing(item)}>Edit</button>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Testingform;
