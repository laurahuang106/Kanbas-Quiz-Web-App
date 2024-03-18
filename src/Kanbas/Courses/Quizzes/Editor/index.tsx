import { FaBan, FaSearch, FaEllipsisV, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NewQuizNav from "./NewQuizNav";
import QuizQuestionCard from "./QuizQuestionCard";

export interface Question {
  _id: string;
  title: string;
  body: string;
  points: number;
  type: string;
}

// default quesionslist should be empty, keep this line, placeholder
// const questionsList: Question[] = [];

const exampleQuestion1: Question = {
  _id: "q111",
  title: "What is HTML?",
  body: "Explain HTML",
  points: 5,
  type: "fill-in-blank",
};

const exampleQuestion2: Question = {
  _id: "q112",
  title: "What does DOM stand for?",
  body: "Explain HTML.",
  points: 5,
  type: "fill-in-blank",
};

const questionsList: Question[] = [exampleQuestion1, exampleQuestion2];

function QuizQuestionEditor() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center text-center">
        <span>Points 0</span>
        <span className="ms-3">
          <FaBan /> Not Published
        </span>
        <button className="btn border ms-3">
          <FaEllipsisV className="ms-1" />
        </button>
      </div>
      <hr />

      <NewQuizNav />

      <div>
        {questionsList.length === 0 ? (
          <div style={{ height: "10em" }}></div>
        ) : (
          <ul>
            {questionsList.map((question: Question) => (
              <QuizQuestionCard key={question._id} question={question} />
            ))}
          </ul>
        )}
      </div>

      <div className="d-flex justify-content-center gap-5">
        <button
          className="btn border"
          onClick={() =>
            navigate(`/Kanbas/Courses/1/Quizzes/New/Questions/Multi-Choice`)
          }
        >
          <FaPlus className="me-2" />
          New Question
        </button>
        <button className="btn border">
          <FaPlus className="me-2" />
          New Question Group
        </button>
        <button className="btn border">
          <FaSearch className="me-2" />
          Questions
        </button>
      </div>
      <hr />

      <div className="d-flex align-items-center justify-content-between">
        <label htmlFor="notifyUsers" className="">
          <input type="checkbox" id="notifyUsers" name="notifyUsers" /> Notify
          users this quiz has changed
        </label>
        <div>
          <button
            className="btn border ms-2"
            onClick={() => navigate(`/Kanbas/Courses/1/Quizzes`)}
          >
            Cancel
          </button>
          <button
            className="btn border ms-2"
            onClick={() => navigate(`/Kanbas/Courses/1/Quizzes`)}
          >
            Save & Publish
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() => navigate(`/Kanbas/Courses/1/Quizzes`)}
          >
            Save
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default QuizQuestionEditor;
