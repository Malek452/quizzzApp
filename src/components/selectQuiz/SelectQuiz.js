import React from 'react'
import { quizzes } from '../../data/quizzes';
import SingleQuiz from '../singleQuiz/SingleQuiz';


function SelectQuiz() {
  // const [QuizzIndex, setQuizzIndex] = React.useState(0);

    const quizz = quizzes[0]; //quizzes[QuizzIndex];
  return (
    <div>
      <SingleQuiz quizz = {quizz} />
    </div>
  )
}

export default SelectQuiz
