import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/User_log', { email, password });
      if (response.status === 200 ) {
        // Save token to local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email);
        localStorage.setItem('ID', response.data.ID);
        alert('Login successful');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <hr/>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
