import "./login.css";
import { Link } from "react-router-dom";
import UserDataService from "./../../services/users";

const Login = (props) => {
  const OnLoginClick = () => {
    console.log("Login Clicked");
    var username_text_box = document.getElementById("username_text_box");
    var username = username_text_box.value;
    var password_text_box = document.getElementById("password_text_box");
    var password = password_text_box.value;
    console.log(username + password);
  };
  
  export default function Login() {
    const handleClick = (event) =>{
        event.preventDefault();
    }

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
