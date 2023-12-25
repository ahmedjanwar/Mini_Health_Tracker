import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserComponent from './Components/auth/UserComponent';
import HealthDataComponent from './Components/HealthDataComponent';
import LoginComponent from './Components/auth/LoginComponent';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setLoggedInUser(userData);
  };

  const logoutUser = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {loggedInUser ? (
              <>
                <li>
                  <Link to="/health">Health Data</Link>
                </li>
                <li>
                  <span onClick={logoutUser}>Logout</span>
                </li>
              </>
            ) : (
              <li>
                <Link to="/user">User</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to Health Tracker App</h2>} />
          <Route path="/user" element={<UserComponent />} />
          <Route path="/health" element={<HealthDataComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
