import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import "./Quiz.css";
import QuizTests from "./QuizTests/QuizTests";

function Quiz({ questions, data }) {
  let nums = []  
  let [quiz, setQuiz] = useState(nums)

  for (let i = 1; i <= questions; i++) {
    nums.push({id: uuid(), number: i, active: false})
  }

  
  const activeFun = (id) => {
    setQuiz([...quiz],quiz.map(item => {
      if (item.id == id) {
        item.active = true
      }
      else {
        item.active = false
      }
    }))
  }

  console.log(quiz);

  
 
  return (
    <>
      <header className="bg-light p-2">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="logo" to="/">
            <h3>Test</h3>
          </Link>
          <p className="quiz-num">{questions === "" ? `/10` : `/${questions}`}</p>
          <Button variant="contained" className="bg-danger">
            Finish
          </Button>
        </div>
      </header>
      
      <section>
        <div className="quiz d-flex"></div> 
        <div className="container">
          <div className="questions">
            <ul className="questions__list d-flex flex-wrap justify-content-center">
              {quiz.map((item, i) => {
                return (
                  <li className={item.active ? "active-btn" : ""} onClick={() => activeFun(item.id)}key={i}>
                    <Button className={item.active ? 'text-white' : 'text-dark'}>{item.number}</Button>
                  </li>
                );
              })}
            </ul>
          </div>

          <QuizTests/>

        </div>
      </section>
    </>
  );
}

export default Quiz;
