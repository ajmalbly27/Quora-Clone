import React, { useState } from "react";
import './QuoraBox.css';
import { RxAvatar } from "react-icons/rx";
import AddQuestionPopup from "../Popups/AddQuestion/AddQuestionPopup";


const QueryBox = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
      <div className="queryBox">
        <div className="queryBox_info">
          <RxAvatar className="queryBox_info_avatar"/>
          <p
            onClick={togglePopup}
          >
            What do you you want to ask or share?
          </p>
        </div>
        {isOpen && <AddQuestionPopup togglePopup={togglePopup}/>}
      </div>
    );
};
  
export default QueryBox;