import Header from "../../Components/Header/Header";
import styles from "./Quiz.module.css";

const Quiz = () => {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.quiz_container}>
          <div className={styles.quiz_header}>
            <div className={styles.quiz_question_count}>
              <span>
                Question: <strong>1/5</strong>
              </span>
            </div>
            <div className={styles.quiz_score}>
              <span>
                Score: <strong>0</strong>
              </span>
            </div>
          </div>
          <div className={styles.quiz_question}>
            <p>
              <b>Gilfoyle was an undocumented immigrant from what country ?</b>
            </p>
          </div>
          <div className={styles.quiz_options}>
            <button className={styles.quiz_option}>Germany</button>
            <button className={styles.quiz_option}>Canada</button>
            <button className={styles.quiz_option}>Poland</button>
            <button className={styles.quiz_option}>Albania</button>
          </div>
          <div className={styles.quiz_footer}>
            <button className={styles.next}>Next &gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
