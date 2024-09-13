import React, { useState } from 'react';
import axios from 'axios';

const Newservice = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to your API
      const response = await axios.post('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/submitnewservice', formData);
      
      if (response.status === 200) {
        setMessage('Service added successfully!');
        setFormData({
          title: '',
          content: '',
          author: ''
        });
      }
    } catch (error) {
      setMessage('Error submitting service. Please try again.');
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <h2>Submit a New Service</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Service Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Service Description:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Service</button>
      </form>
    </div>
  );
};

export default Newservice;
