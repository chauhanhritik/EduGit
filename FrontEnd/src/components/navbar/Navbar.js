import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    // this.state = { user: props.user };
  }
  render() {
    // console.log("NavBar rendered");
    // console.log(this.props);

    return (
      <React.Fragment>
        <div className="nav">
          
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
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/feed"
                >
                  Feed
                </Link>
              </li>

              <li className="listitem">
                <Link
                  classname="link"
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/articles"
                >
                  Articles
                </Link>
              </li>

              <li className="listitem">
                <Link
                  classname="link"
                  to="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
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
             
            </ul>
          </div>
          <div className="right">
            {this.props.user ? (
              <ul className="topicon">
                <li className="listitem">
                  <img
                    className="topimg"
                    src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg"
                    alt=""
                    srcset=""
                  />
                </li>
                <li>Welcome {this.props.userName}</li>
                <button className="buttonstitem" onClick={this.props.logout}>
                  Logout
                </button>
              </ul>
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
           
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
