import { useContext, useState } from 'react';
import './AddAnswerPopup.css';
import { RxAvatar } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { UserContext } from '../../../context/UserContext';

const AddAnswerPopup = ( { item, togglePopup } ) => {
    const [answerInput, setAnswerInput] = useState("");
    const [flag, setFlag] = useState(false);
    const { username, questionAndAnswers, setQuestionAndAnswers } = useContext(UserContext);

    const handleAddAnswer = () => {
        if(!answerInput){
            setFlag(true);
        }else{
            setFlag(false);

            const newItem = {
                ...item,
                answerList: [...item.answerList,{"answer": answerInput, "answeredBy": username}]
            }

            const updatedQuestionAndAnswers = questionAndAnswers.map(element => {
                return element.id !== item.id ? element : newItem;
            })

            // Update the state with the new question and answer
            setQuestionAndAnswers(updatedQuestionAndAnswers);
            // Clear the input fields
            setAnswerInput("");
            //store the array in local storage
            localStorage.setItem('questionAndAnswers', JSON.stringify(updatedQuestionAndAnswers));
            togglePopup();
        }
    }

    return (
        <div className='modal_ans_popup_box'>
            <div className="modal_ans_title">
                <div className='cross_sign'>
                    <RxCross1 onClick={togglePopup} />
                </div>
                <div className="modal_info">
                    <RxAvatar className="avatar" />
                    <div style={{fontWeight:700,marginLeft:5}}>
                        {username}
                    </div>
                </div>
                <div style={{fontSize:'large',fontWeight:650,marginLeft:5,marginTop:10}}>{item.question}</div>
                <div className="ans_modal_field">
                    <textarea
                        name='answerList'
                        className='answer_textarea'
                        placeholder="Write your answer"
                        value={answerInput}
                        onChange={(e)=>setAnswerInput(e.target.value)}
                    ></textarea>
                    {flag && <div className="add-question-flag" style={{color:'red',fontSize:'small'}}>Answer can't be empty, please type something</div>}
                </div>
                <div className="modal_ans_buttons">
                    <button
                        type="submit"
                        className="post_button"
                        onClick={handleAddAnswer}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddAnswerPopup;