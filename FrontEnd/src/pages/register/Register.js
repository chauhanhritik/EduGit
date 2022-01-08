import "./register.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserDataService from "./../../services/users";
import Login from "../login/Login.js";

const Register = (props) => {
  const OnRegisterClick = (event) => {
    //Function called when login button is clicked
    event.preventDefault(); //To stop the page from reloading

    var username_text_box = document.getElementById("username_text_box"); //Getting username from textbox
    var username = username_text_box.value;
    var password_text_box = document.getElementById("password_text_box"); //Getting password
    var password = password_text_box.value;
    var email_text_box = document.getElementById("email_text_box"); //Getting email
    var email = email_text_box.value;

    // var label = document.getElementById("label");

    if (username == "") {
      username_text_box.value = "Username cannot be blank";
    } else if (password == "") {
      password_text_box.value = "Password cannot be blank";
    } else if (email == "") {
      email_text_box.value = "E-mail cannot be blank";
    } else {
      var data = {
        username: username,
        password: password,
        email: email,
      };

      // console.log(data);
      UserDataService.registerUser(data);
      username_text_box.value = "";
      password_text_box.value = "";
      email_text_box.value = "";

      props.reg(true);
    }
  };

  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform">
        <label>Username</label>
        <input
          id="username_text_box"
          type="text"
          className="registerinput"
          placeholder="Enter your email username"
        ></input>
        <label>Email</label>
        <input
          id="email_text_box"
          type="text"
          className="registerinput"
          placeholder="Enter your email address"
        ></input>
        <label>Password</label>
        <input
          id="password_text_box"
          type="password"
          className="registerinput"
          placeholder="Enter your password"
        ></input>
        <button className="registerbutton" onClick={OnRegisterClick}>
          Register
        </button>
        {/* <label id="label" value="hello"></label> */}
      </form>
      <Link
        to="/login"
        className="loginregisterbutton"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Login
      </Link>
    </div>
  );
};

export default Register;
