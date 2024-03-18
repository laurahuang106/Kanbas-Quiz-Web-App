import { Link, useLocation } from "react-router-dom";

function NewQuizNav() {
  const { pathname } = useLocation();
  return (
    <div>
      <nav className="nav nav-tabs mt-2">
        <Link
          to="/Kanbas/Courses/1/Quizzes/New/Details"
          className={`nav-link ${pathname.includes("Details") ? "active" : ""}`}
        >
          Details
        </Link>
        <Link
          to="/Kanbas/Courses/1/Quizzes/New/Questions"
          className={`nav-link ${
            pathname.includes("Questions") ? "active" : ""
          }`}
        >
          Questions
        </Link>
      </nav>
    </div>
  );
}

export default NewQuizNav;
