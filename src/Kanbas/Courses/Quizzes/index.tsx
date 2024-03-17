import { useParams, useNavigate } from "react-router-dom";

function Quizzes() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Quizzes Landing Page</h1>
      <button
        className="btn btn-danger"
        onClick={() => {
          navigate(`/Kanbas/Courses/${courseId}/quizzes/new`);
        }}
      >
        + Quiz
      </button>

      {/* implement quizz list screen below*/}
      {/* quiz list screen end */}

      {/* sample quiz, for quiz-edit-function purpose */}
      <button
        className="btn btn-link"
        onClick={() => {
          navigate(`/Kanbas/Courses/${courseId}/quizzes/q1`);
        }}
      >
        Sample-Quiz
      </button>
    </div>
  );
}

export default Quizzes;
