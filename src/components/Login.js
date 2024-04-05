import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 

const Login= ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
       
        console.log("post login");
        e.preventDefault();
        try {
            // Make an HTTP POST request to your server to authenticate the user
            const response = await axios.post('http://localhost:8080/api/login', {
                username,
                password
            });
            // Extract token from the response
            const token = response.data.token;
            const userdetails = response.data.username;
            localStorage.setItem('token', token); // Store token in localStorage
            navigate('/main');
             console.log("token: " + userdetails,token);
            setToken(token);
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
                <div className="input-container">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-container">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
