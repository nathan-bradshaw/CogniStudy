import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          // Assuming the server sends a token upon successful login
          localStorage.setItem('token', data.token);
          onLogin();
          navigate('/main');
        } else {
          const errorData = await response.json();
          console.error(errorData.error);
          // Handle login error, show a message to the user, etc.
        }
      } catch (error) {
        console.error('Error during login:', error.message);
        // Handle general login error
      }
  };

  const handleRegisterRedirect = () => {
    // Redirect to the registration page
    navigate('/register');
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button" onClick={handleRegisterRedirect}>
          New User?
        </button>
      </form>
    </div>
  );
};

export default Login;
