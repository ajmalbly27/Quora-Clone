import React from "react";
import Navbar from "../Navbar/Navbar";
import './Main.css';
import List from "../List/List";
import QuestionsList from "../QuestionsList/QuestionsList";

const Main = () => {

    return(
        <div className="main-container">
            <Navbar />
            <div className="main-inner-wrapper">
                <List />
                <QuestionsList />
            </div>
        </div>
    )
}
export default Main;