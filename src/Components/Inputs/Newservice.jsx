import React, { useState } from 'react';
import axios from 'axios';

const Newservice = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/submitnewservice", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting the blog:", error.response.data.message);
    }
  };

return (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Content:</label>
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        required
      ></textarea>
    </div>
    <div>
      <label>Author:</label>
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
    </div>
    <button type="submit">Submit Blog</button>
  </form>
);
};

export default Newservice;
