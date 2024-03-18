import { useParams, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function Quizzes() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Quizzes Landing Page</h1>
      <button
        className="btn btn-danger d-flex align-items-center"
        onClick={() => {
          navigate(`/Kanbas/Courses/${courseId}/Quizzes/New/Questions`);
        }}
      >
        <FaPlus className="me-2" />
        Quiz
      </button>

      {/* implement quizz list screen below*/}
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
