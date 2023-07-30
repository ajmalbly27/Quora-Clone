import React, { useState } from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";
 
const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            setFlag(true);
        }else { 
             // Get existing users from local storage or initialize an empty array           
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            // Create a new user object
            const newUser = { username, password, email };
            // Add the new user to the existing array of users
            const updatedUsers = [...existingUsers, newUser];
            // Save the updated array back to local storage
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            // Redirect to the main page 
            navigate('/');
        }
    }

    return(
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-logo-image">
                    <img src="/static/media/Quora-logo.e835ed10b499e301e32b.png" className="logo-image" alt="quora-logo-img" />
                </div>
                <form onSubmit={handleRegister} className="register-inner-container">

                    <input 
                        type="text" 
                        className="input-field-register" 
                        placeholder="Your username....." 
                        required
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        className="input-field-register" 
                        placeholder="Password....." 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password" 
                        className="input-field-register" 
                        placeholder="Confirm password....." 
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <input 
                        type="email" 
                        className="input-field-register" 
                        placeholder="Your email....." 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div>
                        <button 
                            type="submit" 
                            className="register-button"
                        >Register</button>
                    </div>
                    {flag && 
                        <div className="register-password-mismatch">
                            <h6>Passwords are not same</h6>
                        </div>
                    }
                </form>                
            </div>
        </div>
    )
}
export default Register;