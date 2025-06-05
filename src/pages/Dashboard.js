import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { quizList } from '../data/quizList';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const doneIds = user?.doneQuizzes || [];
  const doneQuizzes = quizList.filter((q) => doneIds.includes(q.id));
  const newQuizzes = quizList.filter((q) => !doneIds.includes(q.id));

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Log out</button>
      <h3>New Quizzes</h3>
      <ul>
        {newQuizzes.map((q) => (
          <li key={q.id}>
            <Link to={`/quiz/${q.id}`}>{q.title}</Link>
          </li>
        ))}
      </ul>
      <h3>Quizzes Done</h3>
      <ul>
        {doneQuizzes.map((q) => (
          <li key={q.id}>{q.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
