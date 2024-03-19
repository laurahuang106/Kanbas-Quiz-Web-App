import { FaSearch, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import QuizQuestionCard from "./QuestionCard";

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
  title: "Question 1",
  body: "What is HTML?",
  points: 5,
  type: "fill-in-blank",
};

const exampleQuestion2: Question = {
  _id: "q112",
  title: "Question 2",
  body: "What does DOM stand for?",
  points: 10,
  type: "fill-in-blank",
};

const questionsList: Question[] = [exampleQuestion1, exampleQuestion2];

function QuizQuestionsEditor() {
  const navigate = useNavigate();

  return (
    <div>
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
          className="btn border d-flex align-items-center"
          onClick={() =>
            navigate(`/Kanbas/Courses/1/Quizzes/New/Questions/Multi-Choice`)
          }
        >
          <FaPlus className="me-2" />
          New Question
        </button>
        <button className="btn border d-flex align-items-center">
          <FaPlus className="me-2" />
          New Question Group
        </button>
        <button className="btn border d-flex align-items-center">
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

export default QuizQuestionsEditor;
