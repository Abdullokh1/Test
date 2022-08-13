import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Quiz from './components/Quiz/Quiz'

function App() {
  let [data, setData] = useState([])
  let [questions, setQuestions] = useState("");
  

  const getData = () =>{
    axios.get('https://opentdb.com/api.php?amount=20&category=27&difficulty=medium&type=multiple')
     .then(data => setData(data.data.results))
  }

  useEffect(() =>{
    getData()
  },[])


  return (
    <>
      <Routes>
        <Route path='/' element={<Main setQuestions={setQuestions}/>} />
        <Route path='/Quiz' element={<Quiz data={data} questions={questions}/>} />
      </Routes>
    </>
  )
}

export default App
