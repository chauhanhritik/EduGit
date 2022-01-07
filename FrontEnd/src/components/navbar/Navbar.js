import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { user: props.user };
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="nav">
          <div className="lefticons">
            <i className="licons fas fa-user-graduate"></i>
            <i className="licons fab fa-instagram"></i>
            <i className="licons fab fa-twitter-square"></i>
          </div>
          <div className="center">
            <ul className="topicon">
              <li className="listitem">
                <Link
                  classname="link"
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="listitem">
                <Link
                  classname="link"
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About-Edugit
                </Link>
              </li>
              <li className="listitem">
                <Link
                  classname="link"
                  to="/contactus"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="listitem">
                <Link
                  classname="link"
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {this.state.user && "Logout"} {/*Shown only if user is TRUE*/}
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            {this.state.user ? (
              <img
                className="topimg"
                src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg"
                alt=""
                srcset=""
              />
            ) : (
              <ul className="topicon">
                <Link
                  className="listitem"
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login{" "}
                </Link>
                <Link
                  className="listitem"
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  Register
                </Link>
              </ul>
            )}
            <i className="searchicon topsearchicon fas fa-search"></i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
