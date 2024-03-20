import { createSlice } from "@reduxjs/toolkit";
import db from "../../../Database";


const initialState = {
  questions: db.questions,
  question: { name: "New question 123", description: "New Description", type: "true-false", pts: 10, prompt: ""},
};


const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.questions,
      ];
    },
    deleteQuestion: (state, action) => {
      state.questions = state.questions.filter(
        (question) => question._id !== action.payload
      );
    },
    updateQuestion: (state, action) => {
      state.questions = state.questions.map((question) => {
        if (question._id === action.payload._id) {
          return action.payload;
        } else {
          return question;
        }
      });
    },
    setQuestion: (state, action) => {
      state.question = action.payload;
    },

    setPrompt: (state, action) => {
      if (state.question.type === "true-false") {
        state.question.prompt = "Enter your question text, then select if True or False is the correct answer:";
      } else if (state.question.type === "multiple-choice") {
        state.question.prompt = "Enter your question text, then select the correct answer:";
      } else if (state.question.type === "fill-in-the-blank") {
        state.question.prompt = "Enter your question text, then select the correct answer:";
      }
    }
  },
});


export const { addQuestion, deleteQuestion,
  updateQuestion, setQuestion, setPrompt } = questionsSlice.actions;
export default questionsSlice.reducer;