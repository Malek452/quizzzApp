import React from 'react'
import { quizzes } from '../../data/quizzes';
import SingleQuizz from '../singleQuizz/SingleQuizz';


function SelectQuizz() {

    const quizz = quizzes[0];
  return (
    <div>
      <SingleQuizz quizz = {quizz} />
    </div>
  )
}

export default SelectQuizz
