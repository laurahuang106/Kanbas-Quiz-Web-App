import React from "react";


import { useParams, Routes, Route } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";

import Quizzes from "./Quizzes";
import QuizQuestionEditor from "./Quizzes/NewQuiz/NewQuizQuestions";
import QuizDetail from "./Quizzes/QuizDetail";
import CourseNavigation from "./Navigation";
import QuizDetailEditor from "./Quizzes/QuizDetailEditor";


function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  return (
    <div>
      <h1 className="ms-3 text-danger d-flex align-items-center">
        <HiMiniBars3 className="me-2" />
        Course {course?.name}
      </h1>
      <hr />

      <div className="d-flex">
        <CourseNavigation />

        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:quizzId" element={<QuizDetail />} />
            <Route
              path="Quizzes/New/Questions"
              element={<QuizQuestionEditor />}
            />
             <Route path="Quizzes/:quizzId/Details" element={<QuizDetailEditor />} />
            {/* <Route path="Quizzes/:quizzId/Preview" element={<QuizPreview />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
