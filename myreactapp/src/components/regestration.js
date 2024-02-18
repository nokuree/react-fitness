import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register/', {
                username,
                password,
            });
            console.log(response.data);
            // Handle response / redirect user
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleRegistration}>
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
        <button type="submit">Register</button>
        </form>
    );
};

export default Registration;