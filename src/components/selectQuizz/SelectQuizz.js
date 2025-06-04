import React from 'react'
import { quizzes } from '../../data/quizzes';
import SingleQuizz from '../singleQuizz/SingleQuizz';


function SelectQuizz() {
  // In the future we could allow selecting different quizzes
  const quiz = quizzes;
  return (
    <div>
      <SingleQuizz quiz={quiz} />
    </div>
  );
}

export default SelectQuizz
