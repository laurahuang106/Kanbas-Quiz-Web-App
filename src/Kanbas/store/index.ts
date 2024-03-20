import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../Courses/Quizzes/Questions/reducer";

export interface KanbasState {
  questionsReducer: {
    questions: any[];
    question: any;
  };

}
const store = configureStore({
  reducer: {
    questionsReducer,
  }
});


export default store;