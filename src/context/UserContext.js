import React, { createContext, useState } from "react";

export const UserContext = createContext();

const someQuestionAndAnswers = [
    {
        id:"1",
        answeredBy: "Kamal Rastogi",
        questionedBy: "arun tiwari",
        question: "What is the famous food of Agra?",
        answer: "Petha is the famous sweet of Agra",      
    },      
    {
        id:"2",
        answeredBy: "Rahul Kumar",
        questionedBy: "Jatin Rawat",
        question: "What color is the sky?",
        answer: "The sky is of the color blue. The color is blue because of the Raman Effect.",      
    },       
    {
      id:"3",
      answeredBy: "Abdul Kalam",
      questionedBy: "Abhishek Kushwaha",
      question: "When did the world war start?",
      answer: "The world war 1 started in 1914.",            
    }       
];

export const UserProvider = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [questionAndAnswers, setQuestionAndAnswers] = useState(JSON.parse(localStorage.getItem('questionAndAnswers')) || someQuestionAndAnswers);    

    return (
        <UserContext.Provider value={{
            username,
            setUsername,
            password,
            setPassword,
            questionAndAnswers,
            setQuestionAndAnswers,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}