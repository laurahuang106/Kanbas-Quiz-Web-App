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
import "../../styles.css";

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
          <input
            className="form-control"
            style={{ marginBottom: "5px" }}
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
          {/* dropdown for question type */}
          <select
            className="form-select"
            value={question.type}
            onChange={(e) =>
              dispatch(
                setQuestion({
                  ...question,
                  type: e.target.value,
                })
              )
            }
          ></select>
          {/* input for pts */}
          <input
            className="form-control float-end"
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
          {question.type === "true-false" && (
            <div>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="true"
                  onChange={() =>
                    dispatch(setQuestion({ ...question, answer: true }))
                  }
                />
                True
              </label>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="false"
                  onChange={() =>
                    dispatch(setQuestion({ ...question, answer: false }))
                  }
                />
                False
              </label>
            </div>
          )}
          {question.type === "multiple-choice" && (
            <div>
              <input
                className="form-control"
                value={question.choices[0]}
                onChange={(e) =>
                  dispatch(
                    setQuestion({
                      ...question,
                      choices: [e.target.value, question.choices[1]],
                    })
                  )
                }
              />
              <input
                className="form-control"
                value={question.choices[1]}
                onChange={(e) =>
                  dispatch(
                    setQuestion({
                      ...question,
                      choices: [question.choices[0], e.target.value],
                    })
                  )
                }
              />
            </div>
          )}
          {question.type === "fill-in-the-blank" && (
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
          )}

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
