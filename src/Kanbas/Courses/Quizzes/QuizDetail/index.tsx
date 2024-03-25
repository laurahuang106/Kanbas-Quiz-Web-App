import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle, FaBan, FaPen } from "react-icons/fa";

function QuizDetail() {
  const [published, setPublished] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      {/* top bar for quiz detail */}
      <div className="d-flex justify-content-end gap-1">
        <button
          className="btn btn-success d-flex align-items-center"
          onClick={() => setPublished(!published)}
        >
          {published ? (
            <>
              <FaBan className="me-1" /> Unpublished
            </>
          ) : (
            <>
              <FaCheckCircle /> Published
            </>
          )}
        </button>
        <button
          className="btn border"
          onClick={() => navigate(`/Kanbas/Courses/1/Quizzes/q1/Preview`)}
        >
          Preview
        </button>
        <button
          className="btn border d-flex align-items-center"
          onClick={() => navigate(`/Kanbas/Courses/1/Quizzes/q1/Details`)}
        >
          <FaPen className="me-1" /> Edit
        </button>
        <div className="btn border">
          <FaEllipsisV className="ms-1" />
        </div>
      </div>
      <hr />

      <h2>Q1-HTML</h2>

      {/* quiz detail table */}
      <table className="table quiz-detail-table">
        <tbody>
          <tr>
            <th>Quiz Type</th>
            <td>Graded Quiz</td>
          </tr>
          <tr>
            <th>Points</th>
            <td>29</td>
          </tr>
          <tr>
            <th>Assignment Group</th>
            <td>QUIZZES</td>
          </tr>
          <tr>
            <th>Shuffle Answers</th>
            <td>No</td>
          </tr>
          <tr>
            <th>Time Limit</th>
            <td>30 Minutes</td>
          </tr>
          <tr>
            <th>Multiple Attempts</th>
            <td>No</td>
          </tr>
          <tr>
            <th>View Responses</th>
            <td>Always</td>
          </tr>
          <tr>
            <th>Show Correct Answers</th>
            <td>Immediately</td>
          </tr>
          <tr>
            <th>One Question at a Time</th>
            <td>Yes</td>
          </tr>
          <tr>
            <th>Require Respondus LockDown Browser</th>
            <td>No</td>
          </tr>
          <tr>
            <th>Required to View Quiz Results</th>
            <td>No</td>
          </tr>
          <tr>
            <th>Webcam Required</th>
            <td>No</td>
          </tr>
          <tr>
            <th>Lock Questions After Answering</th>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      {/* quiz schedule table */}
      <table className="table ms-3">
        <thead>
          <tr>
            <th>Due</th>
            <th>For</th>
            <th>Available from</th>
            <th>Until</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sep 21 at 1pm</td>
            <td>Everyone</td>
            <td>Sep 21 at 11:40am</td>
            <td>Sep 21 at 1pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default QuizDetail;
