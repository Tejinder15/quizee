import Header from "../../Components/Header/Header";
import { useQuiz } from "../../Context/QuizContext/quiz-context";
import { useState } from "react";
import styles from "./Quiz.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { questionData } from "../../Data/questionData";

const Quiz = () => {
  const [quesNum, setQuesNum] = useState(0);
  const [selected, setSelected] = useState();
  const [disableOption, setDisableOption] = useState(false);
  const [nxtDisable, setNxtDisable] = useState(true);

  const { quizState, quizDispatch } = useQuiz();

  const { category } = useParams();
  const navigate = useNavigate();

  const quizCategory = questionData.find((item) => item.category === category);

  const correctAnswer = quizCategory.questions[quesNum].answer;

  const optionHandler = (option) => {
    setSelected(option);
    setDisableOption(true);
    setNxtDisable(false);
    if (option === correctAnswer) {
      quizDispatch({
        type: "ANSWER",
        payload: {
          result: { correctAns: correctAnswer, selectedOption: option },
          totalScore: 10,
        },
      });
    } else {
      quizDispatch({
        type: "ANSWER",
        payload: {
          result: { correctAns: correctAnswer, selectedOption: option },
          totalScore: 0,
        },
      });
    }
  };

  const nextHandler = () => {
    setQuesNum(quesNum + 1);
    setDisableOption(false);
    setNxtDisable(true);
  };
  return (
    <div>
      <Header />
      <div>
        <div className={styles.quiz_container}>
          <div className={styles.quiz_header}>
            <div className={styles.quiz_question_count}>
              <span>
                Question: <strong>{quesNum + 1}/5</strong>
              </span>
            </div>
            <div className={styles.quiz_score}>
              <span>
                Score: <strong>{quizState.totalScore}</strong>
              </span>
            </div>
          </div>
          <div className={styles.quiz_question}>
            <p>
              <b>{quizCategory.questions[quesNum].question}</b>
            </p>
          </div>
          <div className={styles.quiz_options}>
            {quizCategory.questions[quesNum].options.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => optionHandler(item)}
                  className={`${
                    selected === item ? `${styles.sel_option}` : ""
                  } quiz_option`}
                  disabled={disableOption}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className={styles.quiz_footer}>
            {quesNum === 4 ? (
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/result`)}
                disabled={nxtDisable}
              >
                Result
              </button>
            ) : (
              <button
                className={styles.next}
                disabled={nxtDisable}
                onClick={nextHandler}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
