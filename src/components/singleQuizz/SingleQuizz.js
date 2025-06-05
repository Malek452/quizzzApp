import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SingleQuizz.module.css';
import Form from '../form/Form';
import { useAuth } from '../../contexts/AuthContext';


function SingleQuizz({ quiz, quizId }) {
    const [score, setScore] = useState(0);
    const [wrongIndex, setWrongIndex] = useState([]);
    const [quizzFinished, setQuizzFinished] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigate = useNavigate();
    const { markQuizDone } = useAuth();
    


    const passToNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };
    const scoreHandler = () =>{
        setScore(score + 1);
    };

    const wrongIndexHandler = () => {
        setWrongIndex([...wrongIndex, currentQuestion]);
    };

    useEffect(() => {
        if (currentQuestion >= quiz.length) {
            setQuizzFinished(true);
        }
    }, [currentQuestion, quiz.length]);

    useEffect(() => {
        if (quizzFinished) {
            markQuizDone(quizId);
            navigate('/dashboard');
        }
    }, [quizzFinished, markQuizDone, quizId, navigate]);

  return (
    <div className={styles.body}>
      <div className={styles.asideContainer}>
        <aside className={styles.aside}>
            <button onClick={() => setQuizzFinished(true)}>Finish Quizz</button>
            <button onClick={() => navigate('/dashboard')}>Exit</button> <br/>
            Score : {score} <br/>
            Progress : {currentQuestion + 1}/{quiz.length}
        </aside>
      </div>
      <div className={styles.questionContainer}>
        <Form
            question={quiz[currentQuestion]}
            pass2next={passToNextQuestion}
            addScore={scoreHandler}
            wrongIndex={wrongIndexHandler}
        />
      </div>
    </div>
  )
}

export default SingleQuizz
