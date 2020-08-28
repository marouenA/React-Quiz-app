import React, { useState, useEffect } from "react";
import "./App.css";
import { Questionaire} from "./components";
import Home from "./components/Home";

const api_url =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple";
function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0);
  const [showAnswer , setShowAnswer]=useState(false);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
       const questions = data.results.map((question)=>
        ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(()=>Math.random()-0.5),
        }))
        setQuestions(questions);
      });
  }, []);

  const handelAnswer = (answer) => {
   
    if(!showAnswer){
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 10);
    }
  }
    setShowAnswer(true);
    // const newIndex = currentIndex + 1;
    // setCurrentIndex(newIndex);

  };
  const handelNextQuestion = ()=>{
    setShowAnswer(false);
    setCurrentIndex(currentIndex+1);
  }
  return (
    <div>
      {/* <Home/> */}
    
   { questions.length > 0 ? (
      <div className="container ">
      {currentIndex >= questions.length ? (
        <h1 className='text-3xl text-white font-bold'>
          Game Ended your score is {score}/100

        </h1>
      ) :(
        
        <Questionaire data={questions[currentIndex]}
        showAnswer={showAnswer}
        handelNextQuestion={handelNextQuestion}
          handelAnswer={handelAnswer} />
  )}
      </div>
  ) : (
      <h2 className="text-2xl text-white font-bold">Loading...</h2>
    )  }
    
    </div>
    );
    
}

export default App;
