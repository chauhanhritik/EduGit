import React, { Component, useState } from "react";
import Navbar from "./components/navbar/Navbar.js";
// import Home from "./pages/Home.js";
import Login from "./pages/login/Login.js";
// import Ques from "./pages/questions/Ques.js";
// import Questions from "./pages/questions/QuestionsLayout.js";
import Register from "./pages/register/Register.js";
import Setting from "./pages/settings/Setting.js";
import Single from "./pages/single/Single.js";
import Write from "./pages/write/Write.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from "./pages/contact/Contact.js";
import Ques from "./pages/ques/Ques.js";
import Quespage from "./pages/questions/Quespage.js";
import Homepage from "./pages/Homepage/Homepage.js";
import Posts from "./components/posts/Posts.js";
import About from "./pages/about/About.js";

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
        <Navbar
          title={this.state.title}
          user={this.state.user}
          userName={this.state.userName}
          logout={this.logoutClick}
        ></Navbar>
        {/* insert here */}

        <Switch>
          <Route path="/quespage">
            <Quespage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/contactus">
            <Contact />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>

          <Route path="/register">
            {this.state.user ? (
              <Homepage />
            ) : this.state.register ? (
              <Login userCallback={this.handleUserCallback} />
            ) : (
              <Register reg={this.changeRegister} />
            )}
          </Route>
          <Route path="/question">
            <Ques />
            {/* <Questions /> */}
          </Route>

          <Route path="/login">
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
          <Route path="/articles">
            <Posts />
          </Route>

           <Route path='/about'>
            <About/>
          </Route>

          <Route path="/post/:postid">
            {/* If post/id is there then it gets dierected to single post page  */}
            <Single />
          </Route>
          <Route path="/quespage">
            <Quespage />
          </Route>

          {/* <Route path='/'>
            
          </Route> */}
        </Switch>

        {/* <Route path='/'>
            
</Route> */}
      </Router>
    );
  }
}

export default App;
