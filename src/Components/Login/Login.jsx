import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://233h32nbnmbnm54b3jkkljlkmm1hf3cvd-4-52m3.vercel.app/postnav01d32q13qd45w4sf2', {username, email, password})
        .then(result => {console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
 
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
