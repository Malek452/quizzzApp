import React from 'react';
import SingleQuizz from '../singleQuizz/SingleQuizz';

function SelectQuizz({ quiz, quizId }) {
  return (
    <div>
      <SingleQuizz quiz={quiz} quizId={quizId} />
    </div>
  );
}

export default SelectQuizz;
