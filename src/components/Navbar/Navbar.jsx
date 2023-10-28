import React, { useContext, useState } from "react";
import './Navbar.css';
import { IoMdHome } from "react-icons/io";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineLanguage } from "react-icons/md";
import AddQuestionPopup from "../Popups/AddQuestion/AddQuestionPopup";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
    const { setUsername } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        setUsername("");
        localStorage.removeItem("quora_current_user");
    }

    return(
        <div className='qheader'>
            <div className='qheader_logo'>
                <img src="data:image/png;base64,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" alt="" />
            </div>
            <div className='qheader_icons'>
                <div className='qheader_icon'>
                    <IoMdHome/>
                </div>
                <div className='qheader_icon'>
                    <MdOutlineFeaturedPlayList />
                </div>
                <div className='qheader_icon'>
                    <MdOutlineAssignmentTurnedIn/>
                </div>
                <div className='qheader_icon'>
                    <MdOutlinePeopleAlt/>
                </div>
                <div className='qheader_icon'>
                    <MdOutlineNotificationsNone/>
                </div>
            </div>
            <div className='qheader_search'>
                <div className="qheader_search_icon">
                    <AiOutlineSearch />
                </div>
                <input type="text" placeholder='Search Quora' />
            </div>
            <div className='qHeader_rem'>
                <div className="qHeader_rem_avatar">
                    <RxAvatar onClick={handleLogout}/> 
                </div>
                <div className="qHeader_rem_language">
                    <MdOutlineLanguage />
                </div>
                <button className="navbar_addQuestion" onClick={togglePopup}>Add Question</button>
            </div>
            {isOpen && <AddQuestionPopup togglePopup={togglePopup}/>}
        </div>
    );
}

export default Navbar;