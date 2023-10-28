import React, { useContext } from "react";
import './Feed.css';
import { UserContext } from "../../context/UserContext";
import Post from "../Post/Post";

const Feed = () => {

    const { questionAndAnswers } = useContext(UserContext);

    console.log(questionAndAnswers);
    const reversedArray = questionAndAnswers.slice().reverse();

    return(
        <div className="list-wrapper">
            {
                reversedArray.map((item, index) => {
                    return (
                        <Post item={item} index={index} key={index}/>
                    )
                })
            }
            { reversedArray.length === 0 && <div style={{textAlign:'center', fontWeight:500}}>No records found</div>}
        </div>
    )
}
export default Feed;