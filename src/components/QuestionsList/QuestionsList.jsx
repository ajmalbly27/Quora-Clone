import React, { useContext } from "react";
import './QuestionsList.css';
import { UserContext } from "../../context/UserContext";
 
const QuestionsList = () => {

    const { questionAndAnswers } = useContext(UserContext);
    const reversedArray = questionAndAnswers.slice().reverse();

    return(
        <div className="questionlist-wrapper">
            <h1>Questions List</h1>
            {
                reversedArray.map((item, index) => {
                    return(
                        <h5 className="questions-list" key={index}>{item.question}</h5>
                    )
                })
            }
        </div>
    )
}
export default QuestionsList;