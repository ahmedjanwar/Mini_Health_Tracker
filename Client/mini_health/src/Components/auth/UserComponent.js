import React, { useState } from 'react';
import axios from 'axios';
import LoginComponent from './LoginComponent';
import './LoginComponent.css';

const UserComponent = () => {
  const [showRegistration, setShowRegistration] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const registerUser = () => {
    axios.post('http://localhost:8080/api/users/register', {
      username: username,
      password: password,
      email: email,
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLoginSuccess = (userData) => {
    console.log('Login success:', userData);
    // You can redirect or update the UI based on the login success
  };

  return (
    <div>
      
      {showRegistration ? (
        <>
        <h2>Sign up</h2>
          <input type="text" className="input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <input type="text" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <button className="submit-button" onClick={registerUser}>Register User</button>
          <p>Already have an account? <span onClick={() => setShowRegistration(false)}>Login</span></p>
        </>
      ) : (
        <LoginComponent onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default UserComponent;
