import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Quiz from "./components/Quiz/Quiz";

function App() {
  let [data, setData] = useState([]);
  let [questions, setQuestions] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(1);


  const getData = async () => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${questions}&category=21&type=multiple`
    );
    setData(res.data.results);
  };

  useEffect(() => {
    getData();
  }, [questions]);

  console.log(data);

  const indexOfLastData = currentPage * postPerPage;
  const indexOfFirstData = indexOfLastData - postPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main setQuestions={setQuestions} />} />
        <Route
          path="/Quiz"
          setData={setData}
          element={
            <Quiz
              postPerPage={postPerPage}
              totalPosts={data.length}
              currentData={currentData}
              currentPage={currentPage}
              questions={questions}
              paginate={paginate}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
