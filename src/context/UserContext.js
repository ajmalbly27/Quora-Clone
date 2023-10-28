import React, { createContext, useState } from "react";

export const UserContext = createContext();

const someQuestionAndAnswers = [
    {
        id: 1,
        questionedBy: "Arun tiwari",
        question: "What is the famous food of Agra?",
        imgUrl: "https://www.tajmahal.gov.in/images/nightview.jpg", 
        answerList: [
            {
                answer: "Petha is the famous sweet of Agra.",
                answeredBy: "Kamal Rastogi",
            }
        ]     
    },      
    {
        id: 2,
        questionedBy: "Jatin Rawat",
        question: "What color is the sky?",  
        imgUrl: "",    
        answerList: [
            {
                answer: "The sky is of the color blue. The color is blue because of the Raman Effect.",
                answeredBy: "Rahul Kumar",
            }
        ]
    },          
    {
      id: 3,
      questionedBy: "Abhijeet",
      question: "When did the world war II start?",
      imgUrl: "", 
      answerList: [
        {   
            answer: "The world war II started in 1 September 1939 to 2 September 1945.",
            answeredBy: "Ajmal Raza",
        },
        {
            answer: "The world war II started in 1939 to 1945.",
            answeredBy: "Ashraf",
        }
      ]            
    },
    {
        id: 4,
        questionedBy: "Abdul Kalam",
        question: "When did the world war start?",
        imgUrl: "https://images.unsplash.com/photo-1541339246244-261d72e381b7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ybGQlMjB3YXIlMjAxfGVufDB8fDB8fHww",
        answerList: [
          {
                answer: "The world war 1 started in 1914.",
                answeredBy: "Abdul Kalam",
          }
        ]           
    },      
];

export const UserProvider = (props) => {

    const [username, setUsername] = useState(JSON.parse(localStorage.getItem('quora_current_user')) || "");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [questionAndAnswers, setQuestionAndAnswers] = useState(JSON.parse(localStorage.getItem('questionAndAnswers')) || someQuestionAndAnswers);    

    return (
        <UserContext.Provider value={{
            username,
            setUsername,
            email,
            setEmail,
            password,
            setPassword,
            questionAndAnswers,
            setQuestionAndAnswers,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}