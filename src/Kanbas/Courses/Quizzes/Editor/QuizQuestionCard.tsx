import { Question } from "./index";

function QuizQuestionCard({ question }: { question: Question }) {
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span className="d-flex align-items-center">
            <i className="fas fa-ellipsis-v me-2"></i>
            Question 1
          </span>
          <span>5 pts</span>
        </div>
        <div className="card-body">
          <p className="card-text">What is HTML?</p>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestionCard;
