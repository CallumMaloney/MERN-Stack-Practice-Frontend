import React, { useState, useEffect } from 'react';
import './App.css';

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

function App() {

  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Form submission success flag
  const [formData, setFormData] = useState({ // Form data in the structure of the schema defined in the backend
    name: '',
    age: '',
    address: '',
    email: ''
  });
  
  // fetches data from the server by making a GET request to the /users endpoint
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        console.log(data);
        // Handle response data
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }
    fetchData();
  }, []);

    // Updates form data by adding new key-value pair using the input name and value
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    
    e.preventDefault(); // preventDefault prevents the default behaviour of the form which is to refresh the page on submission

    try {
      // Make POST request to /users endpoint and pass form data state as the body
      const response = await postData('http://localhost:3000/users', formData);
      console.log(response);
      // Set submission success flag
      setSubmissionSuccess(true);
      // Reset form data
      setFormData({
        name: '',
        age: '',
        address: '',
        email: ''
      });
    } catch (error) {
      console.error(error);
      // Show error prompt
      alert('Form submission failed. Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="overlay">
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <main className="main">
          <form className="main__form" onSubmit={handleSubmit}>
            <div className="main__form--input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="main__form--input">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="main__form--input">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="main__form--input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="main__form--btn">
              <button type="submit">Submit</button>
            </div>
            {submissionSuccess && 
            <p className="success-message">Form submitted successfully!</p>}
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
