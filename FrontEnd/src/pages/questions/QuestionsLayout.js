import "./questions.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default function Questions(props) {
  console.log(props.solution);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="childsno">{props.sno}</div>
          <a className="childquestion" href={props.solution}>
            {props.question}
            {/* <br /> */}
            {/* <Switch>
            <Route ></Route>
          </Switch> */}
<<<<<<< HEAD
    {/* half working-->     <Link to={`/$"https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router"?backUrl=$"www.youtube.com"`} >click </Link> */}
    <a href="$`{props.solution}`" rel="noreferrer">
    (Solution)
  </a>
          </div>
           
          <div className="childstatus">
            {props.mode}
          </div>
=======
            {/* half working-->     <Link to={`/$"https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router"?backUrl=$"www.youtube.com"`} >click </Link> */}
            {/* <a href="$`{props.solution}`" rel="noreferrer">
              FAQ
            </a> */}
          </a>
>>>>>>> b32e586b3c23465e34cb672c5669cc674f0aebe4

          <div className="childstatus">{props.mode}</div>
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
