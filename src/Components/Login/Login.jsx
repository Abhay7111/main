import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/postnav01d32q13qd45w4sf2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Save the token in localStorage
                localStorage.setItem('token', data.token);
                alert('Login successful!');

                // Redirect or perform actions for logged-in users
                // Example: window.location.href = '/dashboard';
            } else {
                // Handle login errors
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An unexpected error occurred');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
