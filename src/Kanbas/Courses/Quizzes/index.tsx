import { useParams, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function Quizzes() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const createAndNavigateToQuiz = async () => {
    try {
      // Replace URL with your actual backend API endpoint
      const response = await fetch("/api/quizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const newQuiz = await response.json();

      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${newQuiz._id}/Edit`);
    } catch (error) {
      console.error("Failed to create quiz:", error);
    }
  };

  return (
    <div>
      {/* top nav bar for quizzes home screen */}
      <button
        className="btn btn-danger d-flex align-items-center"
        onClick={() => {
          // placeholder, after creating backend,  uncomment this line
          // onClick={createAndNavigateToQuiz}
          navigate(`/Kanbas/Courses/${courseId}/Quizzes/q1/Edit`);
        }}
      >
        <FaPlus className="me-2" />
        Quiz
      </button>

      {/* implement quiz list screen below*/}
      <h2>placeholder for quiz list screen</h2>
      {/* quiz list screen end */}

      {/* sample quiz, for quiz-edit-function purpose */}
      <button
        className="btn btn-link"
        onClick={() => {
          navigate(`/Kanbas/Courses/${courseId}/Quizzes/q1`);
        }}
      >
        Sample-Quiz
      </button>
    </div>
  );
}

export default Quizzes;
