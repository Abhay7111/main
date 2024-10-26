import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage

        if (!token) {
            setError('You are not logged in. Redirecting to login page.');
            setTimeout(() => {
                window.location.href = '/login'; // Redirect to login page if no token
            }, 2000);
            return;
        }

        fetch('https://engn1-v1.onrender.com/protectedRoute', { // Replace with your actual API endpoint
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => setData(data))
        .catch(error => {
            console.error('Error:', error);
            setError('Failed to load dashboard data');
        });
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className='text-zinc-100'>
            <h2>Dashboard</h2>
            {data ? (
                <div>
                    <h3>Data from the server:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default Dashboard;
