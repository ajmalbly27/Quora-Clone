import React, { useContext, useState } from "react";
import './AddAnswer.css';
import quora_logo from '../images/Quora-logo.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const AddAnswer = () => {

    const [selectedObject, setSelectedObject] = useState("");
    const [flag, setFlag] = useState(false);
    const [input, setInput] = useState({
        id: "",
        answeredBy: "",
        questionedBy: "",
        question: "",
        answer: ""
    })

    const { username, questionAndAnswers, setQuestionAndAnswers } = useContext(UserContext);
    // const { allQuestionAndAnswers, setAllQuestionAndAnswers } = useContext(UserContext);

    const navigate = useNavigate();

    const handleQuestionClick = (item) => {
        setSelectedObject(item);
    }

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleAddAnswer = () => {
        // console.log(selectedObject.question);
        if(!input.answer)
            setFlag(true);
        else{
            const objectAfterAnswering = {
                ...selectedObject,
                answer: input.answer,
                answeredBy: username
            };

            const updatedQuestionAndAnswers = questionAndAnswers.map(item => {
                return item.id !== selectedObject.id ? item : objectAfterAnswering;
            })

            setQuestionAndAnswers(updatedQuestionAndAnswers);
            // Clear the input fields
            setInput({
                id: "",
                answeredBy: "",
                questionedBy: "",
                question: "",
                answer: ""
            });

            //store the array in local storage
            localStorage.setItem('questionAndAnswers', JSON.stringify(updatedQuestionAndAnswers));
            navigate('/');            
        }
    }

    return(
        <div className="add-answer-wrapper">
            <div className="add-question-logo-image-wrapper">
                <div className="add-question-logo-image">
                    <img src={quora_logo} className="quora-img" alt="logo-img"/>
                </div>
            </div>

            <div className="add-answer-container">
                <div className="select-question">
                    <h2>Select Question</h2>
                    {
                        questionAndAnswers.map(item => {
                            return(
                                <h5 
                                    className="list-of-questions"
                                    onClick={() => handleQuestionClick(item)}
                                >{item.question}</h5>
                            )
                        })
                    }
                </div>
                <div className="answer">
                    {
                        selectedObject &&
                        <div className="selected-question">
                            {selectedObject.question}
                        </div>
                    }
                    <div className="answer-heading">Answer:</div>
                    <textarea
                        name="answer"
                        className="answer-input-field"
                        value={input.answer}
                        onChange={handleInputChange}
                        placeholder="Type your answer here........."
                    >
                    </textarea>
                    {
                        flag && <div>Answer can't be empty, please write something</div>
                    }
                </div>
            </div>

            <div className="add-answer-buttons-wrapper">
            <div className="add-answer-buttons">
                <Button 
                    variant="danger" 
                    className="add-answer-cancel-button"
                    onClick={() => navigate('/')}
                >Cancel</Button>
                <Button 
                    variant="danger"
                    onClick={handleAddAnswer}
                >Add answer</Button>
            </div>
            </div>
        </div>
    )
}
export default AddAnswer;