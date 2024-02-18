import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); // Initialize useHistory

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api-token-auth/', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.token); // Store the token
            console.log('Logged in successfully!');
            history.push('/workouts'); // Redirect to workouts page
        } catch (error) {
            console.error('Failed to login:', error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleLogin}>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button type="submit">Login</button>
    </form>
    );
};

export default Login;