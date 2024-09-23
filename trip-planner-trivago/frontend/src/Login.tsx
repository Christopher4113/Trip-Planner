import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Access environment variables
    const storedUsername = import.meta.env.VITE_USERNAME;
    const storedPassword = import.meta.env.VITE_PASSWORD;

    const goHome = (e: any) => {
        e.preventDefault(); // Prevent form submission


        if (username === storedUsername && password === storedPassword) {
            navigate('/home');
        } else {
            alert("Invalid username or password.");
        }
        setUsername("");
        setPassword("");
    };

    return (
        <div className="login1">
            <form className="form" onSubmit={goHome}>
                <input
                    placeholder="Enter the username"
                    className="input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="Enter the password"
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button1" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
