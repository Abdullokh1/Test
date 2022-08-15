import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Quiz.css";
import QuizTests from "./QuizTests/QuizTests";

function Quiz({
  questions,
  currentPage,
  currentData,
  postPerPage,
  totalPosts,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  
  return (
    <>
      <header className="bg-light p-2">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="logo" to="/">
            <h3>Test</h3>
          </Link>
          <p className="quiz-num">
            {questions === "" ? `/10` : `${currentPage}/${questions}`}
          </p>
          <Button variant="contained" className="bg-danger">
            Finish
          </Button>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="questions">
            <ul className="questions__list pagination d-flex flex-wrap justify-content-center">
              {pageNumbers.map((number, id) => {
                return (
                  <li
                    onClick={() => paginate(number)}
                    className="page-item"
                    key={id}
                  >
                    <a className="page-link" href="#">
                      {number}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <QuizTests currentData={currentData} />
        </div>
      </section>
    </>
  );
}

export default Quiz;
