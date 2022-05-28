import React, { Component, useState } from "react";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";
import Setting from "./pages/settings/Setting.js";
import Single from "./pages/single/Single.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from "./pages/contact/Contact.js";
import Ques from "./pages/ques/Ques.js";
import Quespage from "./pages/questions/Quespage.js";
import Homepage from "./pages/Homepage/Homepage.js";
import Posts from "./components/posts/Posts.js";
import About from "./pages/about/About.js";
import Footer from "./components/footer/Footer.js";

class App extends Component {
  // let title = "EDUGIT";
  state = {
    title: "EDUGIT",
    user: false,
    register: false,
    userName: "",
  };

  //   <div style={{color:'white'}}>
  //   blog app
  // </div>

  // let user = false;
  handleUserCallback = (userVal, username = "") => {
    this.setState({ user: userVal, userName: username });
    console.log("UserCallBack Called");
  };

  logoutClick = () => {
    this.setState({ user: false, register: false });
  };

  changeRegister = (value) => {
    this.setState({ register: value });
  };

  render() {
    return (
      <Router>
        {/* <Navbar
          title={this.state.title}
          user={this.state.user}
          userName={this.state.userName}
          logout={this.logoutClick}
        ></Navbar> */}
        {/* insert here */}
        {/* <About/>   */}
        <Switch>

        <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/quespage">
          <Navbar
          title={this.state.title}
          user={this.state.user}
          userName={this.state.userName}
          logout={this.logoutClick}
        ></Navbar>
          </Route>

          <Route exact path='/about'>
            <Navbar/>
            <About/>
          </Route>
           
          <Route exact path="/contactus">
            <Navbar/>
            <Contact />
          </Route>
          
          <Route exact path="/articles">
            <Navbar/>
            <Posts />
          </Route>

          <Route path="/register">
          <Navbar/>
            {this.state.user ? (
              <Homepage />
            ) : this.state.register ? (
              <Login userCallback={this.handleUserCallback} />
            ) : (
              <Register reg={this.changeRegister} />
            )}
          </Route>
          

          <Route path="/login">
            <Navbar/>
            {this.state.user ? (
              <Homepage />
            ) : (
              <Login userCallback={this.handleUserCallback} />
            )}
          </Route>

          <Route path="/setting">
            {this.state.user ? (
              <Setting />
            ) : (
              <Login userCallback={this.handleUserCallback} />
            )}
          </Route>

          <Route path="/single">
            <Single />
          </Route>

        </Switch>

        
      </Router>
      
    );
  }
}

export default App;
