import { Button } from "@mui/material";
import React, { useState } from "react";
import "./QuizTests.css";

function QuizTests({ currentData }) {
  let [answer, setAnswer] = useState("");
  let [selected, setSelected] = useState(false);
  let [froze, setFroze] = useState(false);
  console.log(currentData);

  const answerHandler = (e) => {
    let givenAnswer = e.target.textContent;
    setAnswer(givenAnswer);
    setSelected((selected = true));
  };

  const submitHandler = () => {
    console.log(answer);
    setFroze((froze = true));
  };

  return (
    <div className="container">
      <div className="test">
        <div className="test__box">
          {currentData.map((item, i) => {
            return (
              <div key={i}>
                <h5>{item.question}</h5>
                <div className="test__inner-box">
                  <form>
                    <ul className="test__list-question">
                      {item.incorrect_answers.map((el, i) => {
                        return (
                          <li onClick={answerHandler} key={i}>
                            <button disabled={froze ? true : false}>
                              {el}
                            </button>
                          </li>
                        );
                      })}
                      <li onClick={answerHandler}>
                        <button
                          disabled={froze ? true : false}
                          className=" correct-answer"
                        >
                          {item.correct_answer}
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            );
          })}
          <ul className="test__button-list pagination d-flex justify-content-between align-items-center">
            <li className="page-item">
              <Button variant="contained">Previous</Button>
            </li>
            <li>
              <Button
                onClick={submitHandler}
                disabled={!selected ? true : false}
                variant="contained"
              >
                Submit
              </Button>
            </li>
            <li className="page-item">
              <Button variant="contained">Next</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QuizTests;
