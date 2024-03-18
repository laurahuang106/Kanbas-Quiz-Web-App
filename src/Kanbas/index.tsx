import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "./Database";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";

const courses = db.courses;

function Kanbas() {
  return (
    <div className="d-flex">
      <div>
        <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route
            path="/Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;
