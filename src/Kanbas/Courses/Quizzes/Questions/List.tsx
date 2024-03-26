import React, { useState } from "react";
import "./index.css";
import db from "../../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  setQuestion,
  setPrompt,
} from "./reducer";
import { KanbasState } from "../../../store";
import "../../../styles.css";

function QuestionList() {
  const { courseId } = useParams();
  const questionList = useSelector(
    (state: KanbasState) => state.questionsReducer.questions
  );
  const question = useSelector(
    (state: KanbasState) => state.questionsReducer.question
  );
  const dispatch = useDispatch();

  const questionsList = questionList.filter(
    (question) => question.course === courseId
  );
  const [selectedQuestion, setSelectedQuestion] = useState(questionsList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-questions">
        <li className="list-group-item">
          <button
            className="green-button float-end"
            onClick={() =>
              dispatch(addQuestion({ ...question, course: courseId }))
            }
          >
            Add
          </button>
          <button
            className="blue-button float-end"
            onClick={() => dispatch(updateQuestion(question))}
          >
            Update
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <input
              className="form-control"
              style={{ flex: 1, marginRight: "5px" }}
              value={question.name}
              onChange={(e) =>
                dispatch(
                  setQuestion({
                    ...question,
                    name: e.target.value,
                  })
                )
              }
            />

            <select
              className="form-select"
              style={{ flex: 1, marginRight: "5px" }}
              value={question.type}
              onChange={(e) =>
                dispatch(
                  setQuestion({
                    ...question,
                    type: e.target.value,
                  })
                )
              }
            >
              <option value="true-false">True False</option>
              <option value="multiple-choice">Multiple Choice</option>
              <option value="fill-in-the-blank">Fill in the Blank</option>
            </select>

            <input
              className="form-control float-end"
              style={{ flex: 1 }}
              value={question.pts}
              onChange={(e) =>
                dispatch(
                  setQuestion({
                    ...question,
                    pts: e.target.value,
                  })
                )
              }
            />
          </div>

          {/* set prompt need to be changed */}
          <h4>{question.prompt}</h4>

          <br />
          <textarea
            className="form-control"
            value={question.description}
            onChange={(e) =>
              dispatch(
                setQuestion({
                  ...question,
                  description: e.target.value,
                })
              )
            }
          />

          <h3>Answer</h3>
          <div>
            <input
              className="form-control"
              value={question.answer}
              onChange={(e) =>
                dispatch(
                  setQuestion({
                    ...question,
                    answer: e.target.value,
                  })
                )
              }
            />
          </div>
        </li>

        {questionsList.map((question, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedQuestion(question)}
          >
            <button
              className="green-button float-end"
              onClick={(event) => {
                dispatch(setQuestion(question));
              }}
            >
              Edit
            </button>

            <button
              className="red-button float-end"
              onClick={() => dispatch(deleteQuestion(question._id))}
            >
              Delete
            </button>

            <div>
              <FaEllipsisV className="me-2" />
              {question.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default QuestionList;
