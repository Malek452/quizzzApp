// import { quizzes } from './data/quizzes';
import React, {useState} from 'react';
import './App.css';
import SelectQuizz from './components/selectQuizz/SelectQuizz';



function App() {
  const [quiz, setQuiz] = useState(0);  
  const [question, setQuestion] = useState(0);
  
  return (
    <div className="App">
      <SelectQuizz />
    </div>
  );
}

export default App;
