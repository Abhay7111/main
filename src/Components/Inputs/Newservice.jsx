import React, { useState } from "react";
import axios from "axios";

const Newservice = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    date: "", // Optional: Date can be empty as it's auto-filled server-side
  });

  // Update state for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post("http://localhost:5000/submitnewservice", formData);
      // Assuming the server returns a success message on success
      alert(response.data.message); 
    } catch (error) {
      console.error("Error submitting the blog:", error);
      if (error.response && error.response.data.message) {
        alert("Error: " + error.response.data.message); // Show error message returned from the server
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
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
        <label htmlFor="content">Content:</label>
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

      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit New Service</button>
    </form>
  );
};

export default Newservice;
