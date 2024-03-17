import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/Editor";

function Courses({ courses }: { courses: any[] }) {
  return (
    <div>
      <Routes>
        <Route path="Quizzes" element={<Quizzes />} />
        <Route path="Quizzes/:quizzId" element={<QuizEditor />} />
      </Routes>
    </div>
  );
}

export default Courses;
