
// src/components/AdminLogin.js
import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Static admin credentials
  const staticUsername = 'kalakendra';
  const staticPassword = 'kalakendra@123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === staticUsername && password === staticPassword) {
      // Set login status in localStorage
      localStorage.setItem('isAdminLoggedIn', 'true');
      alert('Login successful! Redirecting to homepage...');
      window.location.href = '/kalakendra'; // Redirect to the home page
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/background.jpg)` }}>
      <div className="login-card">
        <h2>Admin Login</h2>
        <p className="catchy-phrase">"Designing the Future, One Login at a Time!"</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="rounded-input"
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-input"
          />
          <button type="submit">Login</button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
