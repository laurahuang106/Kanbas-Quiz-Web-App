import { FaBan, FaSearch, FaEllipsisV, FaPlus } from "react-icons/fa";
import NewQuizNav from "./NewQuizNav";

const questionsList = [
  { _id: 111, title: "What is HTML" },
  { _id: 112, title: "What is DOM" },
];

function QuizQuestionEditor() {
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
          <ol>
            {questionsList.map((question) => (
              <li key={question._id}>{question.title}</li>
            ))}
          </ol>
        )}
      </div>

      <div className="d-flex justify-content-center gap-5">
        <button className="btn border">
          <FaPlus className="me-2" />
          New Question
        </button>
        <button className="btn border">
          <FaPlus className="me-2" />
          New Question Group
        </button>
        <button className="btn border">
          <FaSearch className="me-2" />
          Icon Find Questions
        </button>
      </div>
      <hr />

      <div className="d-flex align-items-center justify-content-between">
        <label htmlFor="notifyUsers" className="">
          <input type="checkbox" id="notifyUsers" name="notifyUsers" /> Notify
          users this quiz has changed
        </label>
        <div>
          <button className="btn border ms-2">Cancel</button>
          <button className="btn border ms-2">Save & Publish</button>
          <button className="btn btn-danger ms-2">Save</button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default QuizQuestionEditor;
