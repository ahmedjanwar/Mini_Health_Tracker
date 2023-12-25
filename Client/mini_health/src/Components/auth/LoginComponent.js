import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.css';
import UserComponent from './UserComponent';

const LoginComponent = ({ onLoginSuccess }) => {
  const [showRegistration, setShowRegistration] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const loginUser = () => {
    axios.post('http://localhost:8080/api/users/login', {
      username: username,
      password: password,
    })
      .then(response => {
        console.log(response.data);
        onLoginSuccess(response.data); 
        navigate('/health');
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleLoginSuccess = (userData) => {
    console.log('Login success:', userData);
    navigate('/health');
  };

  return (
    <div>
    {showRegistration ? (
      <>
   
      <h2>Login</h2>
      <input type="text"  className="input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password"  className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="submit-button" onClick={loginUser}>Login</button>
      <p>new account? <span onClick={() => setShowRegistration(false)}>signup</span></p>
    
    </>
    ) : (
      <UserComponent onLoginSuccess={handleLoginSuccess} />
    )}
    </div>
  );
};

export default LoginComponent;
