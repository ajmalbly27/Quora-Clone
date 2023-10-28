import { useState } from 'react';
import './Signup.css';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setC_Password] = useState("");
    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();

    const handleNameAndEmail = () => {
        if(!username || !email || !password || !c_password || password !== c_password){
            setFlag(true);
        }else {
            setFlag(false);
            props.togglePopup();
            // Get existing users from local storage or initialize an empty array           
            const existingUsers = JSON.parse(localStorage.getItem('quora_users')) || [];
            // Create a new user object
            const newUser = { username, password, email };
            // Add the new user to the existing array of users
            const updatedUsers = [...existingUsers, newUser];
            // Save the updated array back to local storage
            localStorage.setItem('quora_users', JSON.stringify(updatedUsers));
            // Redirect to the main page
            navigate('/');
        }
    }

    return (
        <div className='signup_popup_box'>
            <div className="signup_title">
                <div className='cross_sign'>
                    <RxCross1 onClick={props.togglePopup} />
                </div>
                <div className="signup_heading">
                    Sign up
                </div>
                <div className='signup_input_field'>
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        name='name'
                        type="text"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="What would you like to be called?"
                    />
                </div>
                <div className='signup_input_field'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        name='email'
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                    />
                </div>
                <div className='signup_input_field'>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        name='password'
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your password"
                    />
                </div>
                <div className='signup_input_field'>
                    <label htmlFor='c_password'>Confirm your password</label>
                    <input
                        id='c_password'
                        name='c_password'
                        type="password"
                        value={c_password}
                        required
                        onChange={(e) => setC_Password(e.target.value)}
                        placeholder="Confirm your password"
                    />
                </div>
                {flag && <div className='signup_error_message'>All fields are mandatory and password should be same.</div>}
                <div className="signup_button">
                    <button 
                        type="submit" 
                        className="signup"
                        onClick={handleNameAndEmail}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup;