import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Quizzes from "./Quizzes";

function Courses({ courses }: { courses: any[] }) {
  return (
    <div>
      <Routes>
        <Route path="Quizzes" element={<Quizzes />} />
      </Routes>
    </div>
  );
}

export default Courses;
