import React, { useContext, useState } from 'react';
import './Login.css';
import { MdArrowForwardIos } from "react-icons/md";
import Signup from '../Signup/Signup';
import { UserContext } from '../../context/UserContext';

const Login = () => {
    const { setUsername, email, setEmail, password, setPassword } = useContext(UserContext);
    const [emailCheckFlag, setEmailCheckFlag] = useState(false);
    const [authFlag, setAuthFlag] = useState(false);
    const [flag, setFlag] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const allUsers = JSON.parse(localStorage.getItem('quora_users')) || [];

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleEmailinputChange = (e) => {
        setEmail(e.target.value);
        if(allUsers.length){
            for(let user of allUsers) {
                if(user.email === e.target.value){
                    setEmailCheckFlag(false);
                    break;
                }else{
                    setEmailCheckFlag(true);
                }
            }
        }else{
            setEmailCheckFlag(true);
        }
    }

    const handleLogIn = () => {
        if(!email || !password){
            setFlag(true);
        }else {
            setFlag(false);
            if(isUserExist()){
                setAuthFlag(false);
                setEmail("");
                setPassword("");
            }else{
                setAuthFlag(true);
            }
        }
    };

    const isUserExist = () => {
        for(let user of allUsers) {
            if(user.email === email && user.password === password){
                setUsername(user.username);
                localStorage.setItem('quora_current_user', JSON.stringify(user.username));
                return true;
            }
        }
        return false;
    }

    return (
        <div className="login">
            <div className="login_container">
                <div className="login_logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
                        alt="logo_quora"
                    />
                </div>
                <div className="login_desc">
                    <p>A place to share knowledge and better understand the world</p>
                </div>
                <div className="login_auth">
                    <div className="login_authOptions">
                        <div className='login_authDesc'>
                            By continuing you indicate that you agree to Quora’s 
                            <span style={{ color: "rgb(25, 95, 170)", cursor: "pointer" }}>Terms of Service</span> and <span style={{ color: "rgb(25, 95, 170)", cursor: "pointer" }}>Privacy Policy.</span>
                        </div>
                        <div className="login_authOption_email">
                            <span onClick={togglePopup}>Sign up with email</span>
                        </div>
                    </div>
                    <div className="login_emailPass">
                        <div className="login_label">
                            <div>Login</div>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField_wrapper">
                                <label>Email</label>
                                <div className='login_inputField'>
                                    <input
                                        name='email'
                                        type="email"
                                        value={email}
                                        required
                                        onChange={(e) => handleEmailinputChange(e)}
                                        placeholder="Your email"
                                    />
                                </div>
                                {emailCheckFlag && <div style={{color:'red',fontSize:'small',marginLeft:'2px'}}>No account found for this email. Retry, or Sign up for Quora.</div>}
                            </div>
                            <div className="login_inputField_wrapper">
                                <label>Password</label>
                                <div className='login_inputField'>
                                    <input
                                        type="password"
                                        value={password}
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your password"
                                    />
                                </div>
                                {authFlag && <div style={{color:'red',fontSize:'small',marginLeft:'2px'}}>Incorrect password.</div>}
                                {flag && <div style={{color:'red',fontSize:'small'}}>Please enter your email and password.</div>}
                            </div>
                        </div>
                        <div className="login_forgButt">
                            <small>Forgot Password?</small>
                            <button onClick={handleLogIn}>Login</button>
                        </div>
                    </div>
                </div>
                <div className="login_lang">
                    <p style={{color:"#6b92f5"}}>हिन्दी</p>
                    <MdArrowForwardIos fontSize="small" style={{color:"grey"}}/>
                </div>
                <div className="login_footer">
                    <p>About</p>
                    <p>Languages</p>
                    <p>Careers</p>
                    <p>Businesses</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contact</p>
                    <p>&copy; Quora Inc. 2023</p>
                </div>
            </div>
            {isOpen && <Signup togglePopup={togglePopup}/>}
        </div>
    )
}

export default Login;