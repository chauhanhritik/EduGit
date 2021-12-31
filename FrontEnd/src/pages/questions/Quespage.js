import React from "react";
import "./quespage.css";

export default function Quespage() {
  return (
    <div className="head">
      <div className="question">
        question is meant to be here Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Reiciendis rem in saepe ea voluptatibus nisi maiores.
        Explicabo atque dignissimos porro repellat magni facilis quasi esse
        voluptate cupiditate, architecto distinctio officia?
      </div>
      <div className="videolink">
          kllink for videos
          <br/>
          <button className="videobtn">Click here</button>
      </div>
      <div className="soltextlink">
          link for text solution
          <button className="textbtn">
              Click Here
          </button>
          </div>
    </div>
  );
}
