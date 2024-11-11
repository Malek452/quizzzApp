import React, {useState, useEffect} from 'react'
import styles from './SingleQuizz.module.css';
import Form from '../form/Form';


function SingleQuizz({quizz}) {
    const [score, setScore] = useState(0);
    const [wrongIndex, setWrongIndex] = useState([]);
    const[quizzFinished, setQuizzFinished] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const passToNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };
    const scoreHandler = () =>{
        console.log("score handler called");
        setScore(score + 1);
    };

    const wrongIndexHandler = () => {
        setWrongIndex([...wrongIndex, currentQuestion]);
    };

    useEffect(() => {
        console.log(`The score is ${score}`);
        console.log(`The wrong answers indecies are ${wrongIndex}`);
    }, [currentQuestion]);

  return (
    <body className={styles.body}>
    <div className={styles.asideContainer}>
        <aside className={styles.aside}>
            <button onClick={() => setQuizzFinished(true)}>Finish Quizz</button> <br/>
            Score : {score} <br/>
            Progress : {currentQuestion +1 }/{quizz.length} 
        </aside>
    </div>
    <div className={styles.questionContainer}>
        <
            Form 
            question={quizz[currentQuestion]}
            pass2next = {passToNextQuestion}
            addScore={scoreHandler}
            wrongIndex={wrongIndexHandler}
        />
    </div>
    </body>
  )
}

export default SingleQuizz