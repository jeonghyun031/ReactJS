import { useState } from 'react';
import './App.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const endpoint = isRegistering ? '/register' : '/login';
        const url = `http://127.0.0.1:8000${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                if (isRegistering) {
                    alert('Registration successful! Please login.');
                    setIsRegistering(false);
                } else {
                    onLogin();
                }
            } else {
                setError(data.detail || 'An error occurred');
            }
        } catch (err) {
            console.error("Login Error:", err);
            setError(`Failed to connect to server: ${err.message}. ensure backend is running at http://127.0.0.1:8000`);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>{isRegistering ? 'Create Account' : 'Welcome Back'}</h2>
                <p className="subtitle">{isRegistering ? 'Sign up to get started' : 'Login to access your stopwatch'}</p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        {isRegistering ? 'Sign Up' : 'Login'}
                    </button>
                </form>

                <p className="toggle-text">
                    {isRegistering ? 'Already have an account?' : "Don't have an account?"}
                    <span onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? ' Login' : ' Sign Up'}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;
