import React, { useState } from "react";
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

function App(props) {
  let title = "EDUGIT";

  //   <div style={{color:'white'}}>
  //   blog app
  // </div>
  let user = false;
  let handleUserCallback = (userVal) => {
    user = userVal;
  };

  return (
    <Router>
      <Navbar title={title}></Navbar>
      {/* insert here */}

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/contactus">
          <Contact />
        </Route>
        <Route path="/home">
          <Homepage />
        </Route>

        <Route path="/register">{user ? <Homepage /> : <Register />}</Route>
        <Route path="/question">
          <Ques />
          {/* <Questions /> */}
        </Route>

        <Route path="/login">
          {user ? <Homepage /> : <Login userCallback={handleUserCallback} />}
        </Route>

        <Route path="/setting">{user ? <Setting /> : <Login />}</Route>

        <Route path="/single">
          <Single />
        </Route>
        <Route path="/articles">
          <Posts />
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

export default App;
