import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/Home.js";
import Login from "./pages/login/Login.js";
// import Ques from "./pages/questions/Ques.js";
import Questions from "./pages/questions/QuestionsLayout.js";
import Register from "./pages/register/Register.js";
import Setting from "./pages/settings/Setting.js";
import Single from "./pages/single/Single.js";
import Write from "./pages/write/Write.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from "./pages/contact/Contact.js";
import Ques from "./pages/ques/Ques.js";

function App() {
  let title = "EDUGIT";

  //   <div style={{color:'white'}}>
  //   blog app
  // </div>
  let user = true;
  return (
    <Router>
      <Navbar title={title}></Navbar>
      {/* insert here */}

      <Route path="/contactus">
        <Contact />
      </Route>
      <Switch>
        <Route exact path="/">
          <Home title={title} />
        </Route>

        <Route path="/register">
          {user ? <Home /> : <Register />}
          {/*Here if user does not exist i.e it is false only then the
          user can navigate to register page otherwise he will be redirected
          to home page */}
        </Route>
        <Route path="/question">
          <Ques />
          {/* <Questions /> */}
        </Route>

        <Route path="/login">{user ? <Home /> : <Login />}</Route>

        <Route path="/setting">{user ? <Setting /> : <Login />}</Route>

        <Route path="/single">
          <Single />
        </Route>

        <Route path="/post/:postid">
          {/* If post/id is there then it gets dierected to single post page  */}
          <Single />
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
