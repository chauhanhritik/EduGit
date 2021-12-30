import React, { useState, useEffect } from "react";
import QuestionDataService from "../../services/questions";
import Questions from "../questions/Questions";
// import { Link } from "react-router-dom";

const Ques = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    retrieveQuestions();
  }, []);

  const retrieveQuestions = () => {
    QuestionDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data.questions);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveQuestions();
  };

  const find = (query, by) => {
    QuestionDataService.find(query, by)
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data.questions);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {questions.map((questions, i) => {
        return (
          <div>
            <Questions
              sno={i + 1}
              question={questions.Name}
              mode={questions.Question_Type}
            />
          </div>
        );
      })}

      {/* <Questions sno="1" question={questions.name} mode="Beginner" />
      <Questions
        sno="2"
        question='Find the "Kth" max and min element of an array  '
        mode="Beginner"
      />
      <Questions
        sno="3"
        question="Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo"
        mode="Beginner"
      />
      <Questions
        sno="4"
        question="Minimise the maximum difference between heights [V.IMP]"
        mode="Beginner"
      /> */}
    </div>
  );
};

export default Ques;
