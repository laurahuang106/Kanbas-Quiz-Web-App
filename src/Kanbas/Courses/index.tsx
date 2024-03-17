import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Quizzes from "./Quizzes";
import QuizQuestionEditor from "./Quizzes/Editor";
import QuizDetail from "./Quizzes/QuizDetail";

function Courses({ courses }: { courses: any[] }) {
  return (
    <div>
      <Routes>
        <Route path="Quizzes" element={<Quizzes />} />
        <Route path="Quizzes/:quizzId" element={<QuizDetail />} />
        <Route path="Quizzes/New/Questions" element={<QuizQuestionEditor />} />
        {/* <Route path="Quizzes/:quizzId/Edit" element={<QuizEditor />} /> */}
        {/* <Route path="Quizzes/:quizzId/Preview" element={<QuizPreview />} /> */}
      </Routes>
    </div>
  );
}

export default Courses;
