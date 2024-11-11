import React, { useState } from 'react';
import styles from './Form.module.css';

function Form({question, pass2next, addScore, wrongIndex})  {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  if (!question) {
    return <div>Loading...</div>; // Handle the case where question is undefined
  }
  const questionData = question;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const correctSelected = selectedAnswers.filter(answer => questionData.correctAnswers.includes(answer));
    const incorrectSelected = selectedAnswers.filter(answer => !questionData.correctAnswers.includes(answer));
    console.log(`correct selected ${correctSelected}`);
    console.log(`incorrect selected ${incorrectSelected.map((element) => element)}`);
    
    if (correctSelected.length === question.correctAnswers.length && incorrectSelected.length === 0) {
      console.log('Correct answers, calling addScore');
      addScore();
    } else {
      wrongIndex();
    }


    //wait for 2 seconds before moving to the next question
    setTimeout(() => { pass2next() ;
    setSubmitted(false);
    setSelectedAnswers([]);
      ;
     }, 2000);


  };

  const handleAnswerChange = (answer) => {
    setSelectedAnswers((prevAnswers) =>
      prevAnswers.includes(answer)
        ? prevAnswers.filter((ans) => ans !== answer)
        : [...prevAnswers, answer]
    );
  };

  const isCorrect = (answer) => questionData.correctAnswers.includes(answer);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.imageContainer}>
        <img src={questionData.image} className={styles.image} alt="pertinant-image" />
      </div>

      <div className={styles.question}>{questionData.question}</div>
      
      <div className={styles.answersContainer}>
        {questionData.answers.map((answer, index) => {
          const isSelected = selectedAnswers.includes(answer);
          const correct = isCorrect(answer);
          let answerClass = styles.answerLabel;

          if (submitted) {
            if (correct && isSelected) {
              answerClass = `${styles.answerLabel} ${styles.correct}`;
            } else if (!correct && isSelected) {
              answerClass = `${styles.answerLabel} ${styles.wrong}`;
            }
          } else if (isSelected) {
            answerClass = `${styles.answerLabel} ${styles.selected}`;
          }

          return (
            <label
              key={index}
              className={answerClass}
            >
              <input
                type="checkbox"
                name="questionAnswer"
                value={answer}
                checked={isSelected}
                onChange={() => handleAnswerChange(answer)}
                className={styles.answerInput}
                disabled={submitted}
              />
              {answer}
            </label>
          );
        })}
      </div>

      <button type="submit" className={styles.button} disabled={submitted}>
        {submitted ? 'Submitted' : 'Submit'}
      </button>
    </form>
  );
};

export default Form;
