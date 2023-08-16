import React, { useContext, useState } from "react";
import './AddQuestion.css';
import quora_logo from '../images/Quora-logo.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const AddQuestion = () => {

    const [flag, setFlag] = useState(false);    
    const { username, questionAndAnswers, setQuestionAndAnswers } = useContext(UserContext);
    
    const navigate = useNavigate();
    // const arrayOfQuestionsAndAnswers = JSON.parse(localStorage.getItem('questionAndAnswers'));
    // const lengthOfArray = arrayOfQuestionsAndAnswers ? arrayOfQuestionsAndAnswers.length : questionAndAnswers.length;

    // const [question, setQuestion] = useState("");
    const [input, setInput] = useState({
        id: "",
        answeredBy: "",
        questionedBy: "",
        question: "",
        answer: ""
    });
    
    // Function to handle input changes
    const handleInputChange = (e) => {
        // console.log(e.target.name);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // Function to handle user input and update the array
    const handleAddquestionClick = () => {
        if(!input.question)
            setFlag(true);
        else {
            const newQuestion = {
                id: questionAndAnswers.length + 1 + "",
                answeredBy: input.answeredBy,
                questionedBy: username,
                question: input.question,
                answer: input.answer,
            };

            const newQuestionAndAnswers = [...questionAndAnswers, newQuestion];

            // Update the state with the new question and answer
            // setQuestionAndAnswers([...questionAndAnswers, newQuestion]);
            setQuestionAndAnswers(newQuestionAndAnswers);

            // Clear the input fields
            setInput({
                id: "",
                answeredBy: "",
                questionedBy: "",
                question: "",
                answer: ""
            });

            //store the array in local storage
            // localStorage.setItem('questionAndAnswers', JSON.stringify(questionAndAnswers));
            localStorage.setItem('questionAndAnswers', JSON.stringify(newQuestionAndAnswers));
            navigate('/');
        }
    }

    return(
        <div className="add-question-container">
            <div className="add-question-logo-image-wrapper">
                <div className="add-question-logo-image">
                    <img 
                        src={quora_logo} 
                        className="quora-img" 
                        alt="logo-img"
                        onClick={() => navigate('/')}
                    />
                </div>
            </div>

            <div className="add-question-input-wrapper">
                <h2 className="add-question-heading">Question:</h2>
                <input 
                    type="text"
                    name="question"
                    required
                    className="add-question-input-field" 
                    placeholder="Type your question here........."
                    value={input.question}
                    onChange={handleInputChange}
                />
            </div>

            { flag && 
                <div className="add-question-flag">Question can't be empty, please type something</div>
            }

            <div className="add-question-buttons">
                <Button variant="danger" className="add-question-cancel-button"
                    onClick={() => navigate('/')}
                >Cancel</Button>
                <Button variant="danger"
                    onClick={handleAddquestionClick}
                >Add question</Button>
            </div>
        </div>
    )
}
export default AddQuestion;