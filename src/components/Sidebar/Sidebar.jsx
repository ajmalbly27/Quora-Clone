import React from "react";
import "./Sidebar.css";
import { IoIosAdd } from "react-icons/io";

const Sidebar = () => {
    return (
      <div className="sibebarMenu">
        <button className="add_button">
          <IoIosAdd className="plus_icon"/>
          <p>Create Space</p>
        </button>
  
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="History"
          />
          <p>History</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80"
            alt="Business"
          />
          <p>Business</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="Psychology"
          />
          <p>Psychology</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Cooking"
          />
          <p>Cooking</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Music"
          />
          <p>Music</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80"
            alt="Science"
          />
          <p>Science</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=499&q=80"
            alt="Health"
          />
          <p>Health</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="Movies"
          />
          <p>Movies</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Technology"
          />
          <p>Technology</p>
        </div>
        <div className="menuOption">
          <img
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Education"
          />
          <p>Education</p>
        </div>
      </div>
    );
};
  
export default Sidebar;