import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let { setUser } = useContext(UserContext); // Fix context key

    return (
        <div>
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
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setUser({ user: username, pass: password }); // Fix function call
                }}
            >
                Submit
            </button>
        </div>
    );
}

export default Login;
