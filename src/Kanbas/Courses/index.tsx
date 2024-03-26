import React from "react";
import { useParams, Routes, Route } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import Quizzes from "./Quizzes";
import QuizQuestionEditor from "./Quizzes/Editor/QuestionsEditor";
import QuizDetail from "./Quizzes/QuizDetail";
import CourseNavigation from "./Navigation";
import QuizEditor from "./Quizzes/Editor";
import Questions from "./Quizzes/Questions";

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
            <Route path="Quizzes/:quizzId/Edit" element={<QuizEditor />} />
            <Route path="Quizzes/:quizzId/questions" element={<Questions />} />
            {/* <Route path="Quizzes/:quizzId/Preview" element={<QuizPreview />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
