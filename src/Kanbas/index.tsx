import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Courses from "./Courses";

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
];

function Kanbas() {
  return (
    <div>
      <Routes>
        <Route
          path="/Courses/:courseId/*"
          element={<Courses courses={courses} />}
        />
      </Routes>
    </div>
  );
}

export default Kanbas;
