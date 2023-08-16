import React, { useContext } from "react";
import './List.css';
import profileIcon from "../images/profile.png";
import { UserContext } from "../../context/UserContext";

const List = () => {

    const { questionAndAnswers } = useContext(UserContext);
    console.log(questionAndAnswers);
    const reversedArray = questionAndAnswers.slice().reverse();

    return(
        <div className="list-wrapper">
            {
                reversedArray.map((item, index) => {
                    return (
                        <div className="list-item" key={index}>
                            <div className="list-icon-container">
                                <div className="profile-icon">
                                    <img src={profileIcon} className="profile-icon-img" alt="profile-icon"/>
                                </div>
                                <h3>{item.questionedBy}</h3>
                            </div>
                            <div className="list-question-div">{item.question}</div>
                            <div className="list-answer-div">{item.answer ? item.answer : "Not answered"}</div>
                        </div>
                    )
                })
            }
            {
                reversedArray.length === 0 && <div style={{textAlign:'center', fontWeight:500}}>No records found</div>
            }
        </div>
    )
}
export default List;