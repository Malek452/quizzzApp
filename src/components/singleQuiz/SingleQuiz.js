import React, {useState, useEffect} from 'react'
import styles from './SingleQuiz.module.css';
import Form from '../form/Form';


function SingleQuiz({quizz}) {
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
        if (quizzFinished) {
            console.log(`The quizz is finished with a score of ${score}`);
        }
    }, [currentQuestion, score, wrongIndex, quizzFinished]);

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

export default SingleQuiz
