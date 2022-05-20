import { createContext, useContext, useReducer } from "react";
import {quizReducer} from "../../Reducer/quizReducer";

const QuizContext = createContext(null);

const defaultState = {
    result: [],totalScore:0
};

const QuizProvider = ({children}) => {
    const [quizState,quizDispatch] = useReducer(quizReducer,defaultState);
    return(
        <QuizContext.Provider value={{quizState,quizDispatch}}>
            {children}
        </QuizContext.Provider>
    )
};

const useQuiz = () => useContext(QuizContext);

export {useQuiz,QuizProvider};