import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useQuiz } from "../../Context/QuizContext/quiz-context";
import styles from "./Result.module.css";
const Result = () => {
  const { quizState } = useQuiz();
  return (
    <div>
      <Header />
      <h1 className="center-text">Score : {quizState.totalScore}/50</h1>
      <div className={styles.result_container}>
        <div className={styles.result_check}>
          <ol>
            {quizState.result.map((item, index) => (
              <li key={index}>
                <p
                  className={
                    item.correctAns === item.selectedOption
                      ? `${styles.crr_ans}`
                      : `${styles.wrong_ans}`
                  }
                >
                  Your Answer: {item.selectedOption}
                </p>
                <p>
                  <b>Correct Answer:</b> {item.correctAns}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.result_footer}>
          <Link to="/category" className={`btn btn-error ${styles.exit_btn}`}>
            Exit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
