import React, { useState, useEffect } from "react";
import QuestionDataService from "../../services/questions";

import "./ques.css";
import Questions from "../questions/QuestionsLayout";
// import { Link } from "react-router-dom";

const Ques = (props) => {
  const [questions, setQuestions] = useState([]);

  const [page_no, setPage] = useState([]);

  useEffect(() => {
    setPage(1);
    retrieveQuestions();
  }, []);

  const retrieveQuestions = () => {
    QuestionDataService.getAll(page_no)
      .then((response) => {
        // console.log(response.data);
        setQuestions(response.data.questions);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const next_click = () => {
    setPage(page_no + 1);
    retrieveQuestions();
  };

  const reset_click = () => {
    //FAULTY!!

    setPage(1);
    retrieveQuestions();
    // setPage(1);
  };

  const prev_click = () => {
    if (page_no > 1) {
      setPage(page_no - 1);
      retrieveQuestions();
      // console.log(page_no);
    }
  };

  const gotoPage_click = () => {
    //FAULTY!!

    var pno = document.getElementById("page_text_box");
    setPage(pno.value);
    retrieveQuestions();
  };

  return (
    <div>
      {questions.map((questions, i) => {
        return (
          <div>
            <Questions
              sno={(page_no - 1) * 20 + i + 1}
              question={questions.Name}
              mode={questions.Question_Type}
            />
          </div>
        );
      })}

      <form className="form">
        <button className="btnBack" type="button" onClick={prev_click}>
          BACK
        </button>

        <input className="textbox" type="text" defaultValue={page_no} id="page_text_box" />
        <button
          className="btnGoto"

          type="button"
          onClick={gotoPage_click}
        >
          Go To
        </button>

        <button className="btnReset" type="button" onClick={reset_click}>
          RESET
        </button>

        <button className="btnBack" type="button" onClick={next_click}>
          NEXT
        </button>
      </form>
    </div>
  );
};

export default Ques;
