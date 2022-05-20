const quizReducer = (state,action) => {
    switch (action.type) {
        case "ANSWER":
            return{
                ...state,
                result:[
                    ...state.result,action.payload.result
                ],
                totalScore: state.totalScore + action.payload.totalScore,
            };
        case "RESET": 
            return {
                ...state,result:[],totalScore:0
            };
        default:
            return {
                state
            };
    }
};

export {quizReducer};