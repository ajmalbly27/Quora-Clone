import { useContext, useState } from 'react';
import './AddQuestionPopup.css';
import { RxAvatar } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import { UserContext } from '../../../context/UserContext';

const AddQuestionPopup = (props) => {
    const [flag, setFlag] = useState(false);
    const [input, setInput] = useState({
        id: "",
        questionedBy: "",
        question: "",
        imgUrl: "",
        answerList: []
    })

    const { username, questionAndAnswers, setQuestionAndAnswers } = useContext(UserContext);

    // Function to handle input changes
    const handleInputChange = (e) => {
        // console.log(e.target.name);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleAddQuestion = () => {
        if(!input.question){
            setFlag(true);
        }else{
            const newQuestion = {
                id: questionAndAnswers.length + 1,
                questionedBy: username,
                question: input.question,
                imgUrl: input.imgUrl,
                answerList: []
            }

            const newQuestionAndAnswers = [...questionAndAnswers, newQuestion];
            // Update the state with the new question and answer
            setQuestionAndAnswers(newQuestionAndAnswers);
            // Clear the input fields
            setInput({
                id: "",
                questionedBy: "",
                question: "",
                imgUrl: "",
                answerList: []
            })
            //store the array in local storage
            localStorage.setItem('questionAndAnswers', JSON.stringify(newQuestionAndAnswers));
            props.togglePopup();
        }
    }

    return (
        <div className='modal_popup_box'>
            <div className="modal_title">
                <div className='cross_sign'>
                    <RxCross1 onClick={props.togglePopup} />
                </div>
                <div className="headings">
                    <div>Add Question</div>
                    <div>Create Post</div>
                </div>
                <div className="modal_info">
                    <RxAvatar className="avatar" />
                    <div className="modal_scope">
                        <MdOutlinePeopleAlt style={{ fontSize: '22px' }} />
                        <div style={{ color: 'rgb(53, 49, 49)', margin: "0 5px" }}>Public</div>
                        <MdOutlineExpandMore style={{ fontSize: '25px' }} />
                    </div>
                </div>
                <div className="modal_field">
                    <textarea
                        name='question'
                        className='question_textarea'
                        placeholder="Start your question with 'What', 'How', 'Why', etc."
                        value={input.question}
                        onChange={handleInputChange}
                    ></textarea>
                    {flag && <div className="add-question-flag" style={{color:'red',fontSize:'small'}}>Question can't be empty, please type something</div>}

                    <div className="modal_fieldLink">
                        <IoLinkOutline style={{ fontSize: '25px' }} />
                        <input
                            name='imgUrl'
                            type="text"
                            value={input.imgUrl}
                            onChange={handleInputChange}
                            placeholder="Optional: include a link that give context"
                        />
                    </div>
                </div>
                <div className="modal_buttons">
                    <button className="cancle" onClick={props.togglePopup}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="add"
                        onClick={handleAddQuestion}
                    >
                        Add question
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddQuestionPopup;