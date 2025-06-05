import React from 'react';
import { useParams } from 'react-router-dom';
import { quizList } from '../data/quizList';
import SingleQuizz from '../components/singleQuizz/SingleQuizz';

function QuizPage() {
  const { id } = useParams();
  const quiz = quizList.find((q) => q.id === parseInt(id, 10));
  if (!quiz) {
    return <div>Quiz not found</div>;
  }
  return <SingleQuizz quiz={quiz.questions} quizId={quiz.id} />;
}

export default QuizPage;
