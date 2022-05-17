import Header from "../../Components/Header/Header";
import styles from "./Result.module.css";
const Result = () => {
  return (
    <div>
      <Header />
      <h1 className="center-text">Score : 30/50</h1>
      <div className={styles.result_container}>
        <div className={styles.result_check}>
          <ol>
            <li>
              <p>Your Answer: Answer</p>
              <p>Correct Answer: Answer</p>
            </li>
            <li>
              <p>Your Answer: Answer</p>
              <p>Correct Answer: Answer</p>
            </li>
            <li>
              <p>Your Answer: Answer</p>
              <p>Correct Answer: Answer</p>
            </li>
            <li>
              <p>Your Answer: Answer</p>
              <p>Correct Answer: Answer</p>
            </li>
            <li>
              <p>Your Answer: Answer</p>
              <p>Correct Answer: Answer</p>
            </li>
          </ol>
        </div>
        <div className={styles.result_footer}>
          <button className={`btn btn-error ${styles.exit_btn}`}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
