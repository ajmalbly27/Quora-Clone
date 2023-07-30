import React, { useContext, useState } from "react";
import './Login.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {

    const { username, password, setUsername, setPassword } = useContext(UserContext);

    const [emptyFieldFlag, setEmptyFieldFlag] = useState(false);
    const [authFlag, setAuthFlag] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        if(username === "" || password === ""){
            setEmptyFieldFlag(true);
        }else {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const isUserExist = checkForUser(existingUsers);
            if(isUserExist){
                // console.log(username);
                navigate('/');
                // console.log("Present");
            }else{
                // console.log("Not Present");
                setUsername("");
                setPassword("");
                setAuthFlag(true);
            }
        }
    }

    const checkForUser = (existingUsers) => {
        for(let ele of existingUsers) {
            if( (ele.username === username || ele.email === username) && ele.password === password) {
                return true;
            }
        }
        return false;
    } 

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-logo-image">
                    <img src="/static/media/Quora-logo.e835ed10b499e301e32b.png" className="logo-image" alt="quora-logo-img" />
                </div>
                <h5>A place to share knowledge and better understand the world</h5>    
                <div className="login-inner-container">
                    <div className="login-username">
                        <label htmlFor="username">Username: </label>
                        <input 
                            type="email" 
                            id="username" 
                            className="input-field-login"
                            placeholder="enter username or email....." 
                            required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="login-password"> 
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="input-field-login" 
                            placeholder="enter password....." 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {emptyFieldFlag && 
                        <div className="register-password-mismatch">
                            <h6>All fields are mandatory</h6>
                        </div>
                    }
                    {authFlag && 
                        <div className="register-password-mismatch">
                            <h6>Either password or username is wrong</h6>
                        </div>
                    }
                    <div className="login-buttons">
                        <Button 
                            variant="danger" 
                            className="btn-login-page"
                            onClick={handleLogin}
                        >Login</Button>
                    </div>
                    <div>
                        <h6>Don't have an account? <span
                            className="register-link"
                            onClick={() => navigate('/register')}
                        >Register</span></h6>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default Login;