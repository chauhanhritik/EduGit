import "./questions.css";
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default function Questions(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="childsno">{props.sno}  
          </div>
          <div className="childquestion">
            {props.question} 
             {/* <br /> */}
          {/* <Switch>
            <Route ></Route>
          </Switch> */}
    {/* half working-->     <Link to={`/$"https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router"?backUrl=$"www.youtube.com"`} >click </Link> */}
    <a href="$`{props.solution}`" rel="noreferrer">
    FAQ
  </a>
          </div>
           
          <div className="childstatus">
            {props.mode}
          </div>

        </div>
      </div>
    </>
  );
}


//   </React.Fragment>

// export default Questions;

{
  /* <div class="row align-items-center">
    <span class="col">
      S. No 
    </span>
    <span class="col">
      Question
    </span>
    <span class="col">
      Difficulty level/etc etc
    </span>
  </div> */
}
