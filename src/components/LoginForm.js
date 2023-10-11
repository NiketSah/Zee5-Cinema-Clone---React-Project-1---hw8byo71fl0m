// src/components/LoginForm.js
import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'projectID': 'hw8byo71fl0m', // Replace with your project ID
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          appType: 'ott', // You can adjust this as needed
        }),
      });

      if (response.ok) {
        // Login successful, you can redirect or perform other actions here
        console.log('Login successful');
      } else {
        // Handle login error here
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
