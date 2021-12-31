import React from "react";
import "./sidemenu.css";
import { Link } from "react-router-dom";

export default function Sidemenu() {
  return (
    <div className="side">
      <p className="edugit">Welcome to EduGit</p>
      <div className="tagline">~Learn efficiently with us</div>
      <p className="intro1">
      Courses and questions both at one place
      </p>
      <p className="intro2">
        Learn with EDUGIT with with no concept left uncovered in DS &
        algorithms.
      </p>
      <div className="buttons">
          <hr className="line" />
           <div className="btngrp">
              <Link to="/question" className="questionbtn">Questions</Link>
              <Link to="/articles" className="articlebtn">Articles</Link>
              <Link to="/setting" className="userbtn">User Profile</Link>
           </div>
           <hr className="line2" />
      </div>
      <div className="lefticonsdown">
                <i className="licons fas fa-user-graduate"></i>
                <i className="licons fab fa-instagram"></i>
                <i className="licons fab fa-twitter-square"></i>
      </div>
        
      

      {/* <div className="articles">
        <div className="userprofile">
        </div> */}
      {/* </div> */}
    </div>
  );
}
