import "./login.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserDataService from "./../../services/users";

const Login = (props) => {
  const [Uname, setUname] = useState([]); //The name of the user set after a successful login
  const [loginStatus, setStatus] = useState(false); //variable to tell if the user is signed in

  const OnLoginClick = (event) => {
    //Function called when login button is clicked
    event.preventDefault(); //To stop the page from reloading
    // console.log(props);

    var username_text_box = document.getElementById("username_text_box"); //Getting username from textbox
    var username = username_text_box.value;
    var password_text_box = document.getElementById("password_text_box"); //Getting password
    var password = password_text_box.value;

    UserDataService.getAll(username, password) //Calling getAll function from users.js and passing username and password
      .then((response) => {
        console.log(response);
        if (response.data.User.length == 1) {
          //if credentials are correct, an array of size 1 is returned
          setStatus(true); //user is signed in now
          setUname(response.data.User[0].UserName); //User's name assigned to a variable
          //   console.log(Uname);
          props.userCallback(loginStatus, Uname);
        } else {
          username_text_box.value = "Incorrect Credentials";
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform">
        <label>Email</label>
        <input
          id="username_text_box"
          type="text"
          className="logininput"
          placeholder="Enter your email address"
        ></input>
        <label>Password</label>
        <input
          id="password_text_box"
          type="password"
          className="logininput"
          placeholder="Enter your password"
        ></input>

        <button className="loginbutton" onClick={OnLoginClick}>
          Login
        </button>
      </form>

      <Link
        to="/register"
        className="loginregisterbutton"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Register
      </Link>
    </div>
  );
};

export default Login;
