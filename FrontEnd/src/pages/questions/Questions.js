import "./questions.css";
import React, { useState, useEffect } from "react";
import QuestionsDataService from "../../services/questions";

const QuestionsList = (props) => {
  var page = 0;
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    retrieveQuestions();
  }, []);

  const retrieveQuestions = () => {
    QuestionsDataService.getAll(page)
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data.questions);
      })
      .catch((e) => {
        console.log(e);
      });

    console.log(questions);
  };

  const refreshList = () => {
    retrieveQuestions();
    console.log(page);
  };

  return (
    <div>
      <div className="row">
        {questions.map((questions) => {
          //   const address = `${restaurant.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
          return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{questions.Question}</h5> <br></br>
                <p className="card-text">{questions.Name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          page++; //Not incrementing for some reason
          refreshList();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default QuestionsList;
