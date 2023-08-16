import React, { useContext, useEffect, useState } from "react";
import quora_logo from "../images/Quora-logo.png";
import './Navbar.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { BsList, BsX } from "react-icons/bs";

const Navbar = () => {

    const [searchInput, setSearchInput] = useState("");
    const { username, setUsername, setPassword, setQuestionAndAnswers } = useContext(UserContext);
    const [showMenu, setShowMenu] = useState(false);
    
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleAddQuestions = () => {
        if(username)
            navigate('/add-question');
        else
            navigate('/login');
    }

    const handleAnswerQuestions = () => {
        if(username)
            navigate('/add-answer');
        else
            navigate('/login');
    }

    const handleLogout = () => {
        setUsername("");
        setPassword("");
        navigate('/');
    }

    useEffect(() => {
        // When the component mounts or 'showMenu' changes, toggle the 'no-scroll' class on the body
        if (showMenu) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
    }, [showMenu]);
    
    useEffect(() => {
        // When the searchInput changes (i.e., the user types or clears the search bar),
        // update the questionAndAnswers state based on the searchInput value
        if (searchInput.length === 0 && JSON.parse(localStorage.getItem('questionAndAnswers'))) {
            setQuestionAndAnswers(JSON.parse(localStorage.getItem('questionAndAnswers')));
        } else {
            setQuestionAndAnswers(prevState => prevState.filter(item => {
                return item.question.toLowerCase().includes(searchInput.toLowerCase());
            }));
        }
        // eslint-disable-next-line
    }, [searchInput]);
    
    return(
        <div className="navbar-container">
            <div className="navbar-left">
                <div className="image-logo">
                    <img src={quora_logo} className="quora-img" alt="logo-img"/>
                </div>
                <div>
                    <input                         
                        type="text"
                        name="search" 
                        className="input-field" 
                        placeholder="search for questions...."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="hamburger-icon" onClick={toggleMenu}>
                {showMenu ? <BsX size={35} /> : <BsList size={35} />}
            </div>
            
            <div className={`navbar-right ${showMenu ? "show" : ""}`}>
                <div className={`hamburger-icon ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                    {showMenu ? <BsX size={35} /> : <BsList size={35} />}
                </div>
                <div className="navbar-right-inner">                
                    <Button variant="danger"
                        className="btn-navbar"
                        onClick={handleAddQuestions}
                    >Add questions</Button>

                    <Button variant="danger"
                        className="btn-navbar"
                        onClick={handleAnswerQuestions}
                    >Answer questions</Button>

                    { !username ?   
                        <Button variant="danger"
                            className="btn-navbar"
                            onClick={() => navigate('/login')}
                        >Login</Button>
                        :
                        <Button variant="danger"
                            className="btn-navbar"
                            onClick={handleLogout}
                        >Logout</Button>        
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar;