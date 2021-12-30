import "./questions.css";
import React from 'react'

export default function Questions(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="childsno">{props.sno}</div>
          <div className="childquestion">
            {props.question} 
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
