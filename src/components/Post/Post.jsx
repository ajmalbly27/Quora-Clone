import { useState } from 'react';
import './Post.css';
import AddAnswerPopup from "../Popups/AddAnswer/AddAnswerPopup";
import { RxAvatar } from "react-icons/rx";
import { BiEdit } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { RiShareForward2Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const Post = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="list-item" key={index}>
            <div className="list-icon-container">
                <RxAvatar className="feed_avatar" />
                <div>{item.questionedBy}</div>
            </div>
            <div className="list_question_wrapper">
                <div className="list-question-div">{item.question}</div>
                <div className="list_answer_text_wrapper"
                    onClick={togglePopup}
                >
                    <BiEdit style={{ fontSize: 'larger', color: "rgb(109, 98, 98)", marginRight: 5 }} />
                    <div style={{ color: "rgb(109, 98, 98)", fontWeight: 500 }}>Answer</div>
                </div>
            </div>
            {item.imgUrl && <div className="question_related_img">
                <img src={item.imgUrl} alt="question_related_img" />
            </div>}
            {
                item.answerList.map((item, index) => {
                    return (
                        <div className="answers_div_container" key={index}>
                            <div className="list-answer-div">{item.answer}</div>
                            <div className="answered_by">Answered by {item.answeredBy}</div>
                        </div>
                    )
                })
            }
            <div className='upvote_comment_links_main_wrapper'>
                <div className='upvote_comment_links_wrapper'>
                    <div className='upvote_downvote_wrapper'>
                        <div className='upvote_wrapper'>
                            <BiUpvote style={{fontSize:'large'}}/>
                            <div style={{color:'grey',fontSize:'small',fontWeight:500}}>Upvote-</div>
                            <div style={{color:'grey',fontSize:'small',fontWeight:500}}>05</div>
                        </div>
                        <div className='downvote_wrapper'>
                            <BiDownvote style={{fontSize:'large'}}/>
                        </div>
                    </div>
                    <div>
                        <FaRegComment style={{fontSize:'larger',color:'rgb(105, 105, 105)',margin:'0 25px'}}/>
                    </div>
                    <div>
                        <RiShareForward2Fill style={{fontSize:'larger',color:'rgb(105, 105, 105)'}}/>
                    </div>
                </div>
                <div>
                    <BsThreeDots style={{fontSize:'larger',color:'rgb(105, 105, 105)'}}/>
                </div>
            </div>
            {isOpen && <AddAnswerPopup item={item} togglePopup={togglePopup}/>}
        </div>
    )
}

export default Post;