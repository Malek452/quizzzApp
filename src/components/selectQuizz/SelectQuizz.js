import React from 'react'
import { quizzes } from '../../data/quizzes';
import SingleQuizz from '../singleQuizz/SingleQuizz';


function SelectQuizz() {
  // const [QuizzIndex, setQuizzIndex] = React.useState(0);

    const quizz = quizzes[0]; //quizzes[QuizzIndex];
  return (
    <div>
      <SingleQuizz quizz = {quizz} />
    </div>
  )
}

export default SelectQuizz
