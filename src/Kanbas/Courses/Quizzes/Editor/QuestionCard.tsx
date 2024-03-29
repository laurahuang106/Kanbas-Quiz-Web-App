import { Question } from "./QuestionsEditor";

function QuizQuestionCard({ question }: { question: Question }) {
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span className="d-flex align-items-center">
            <i className="fas fa-ellipsis-v me-2"></i>
            {question.title}
          </span>
          <span>pts: {question.points}</span>
        </div>
        <div className="card-body">
          <p className="card-text">{question.body}</p>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestionCard;
