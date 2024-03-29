import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaBan, FaEllipsisV } from "react-icons/fa";
import QuizDetailsEditor from "./DetailsEditor";
import QuizQuestionsEditor from "./QuestionsEditor";

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

const totalPoints = questionsList.reduce(
  (sum, question) => sum + question.points,
  0
);

export default function QuizEditor() {
  const { quizId } = useParams();
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center text-center">
        <span>Points {totalPoints}</span>
        <span className="ms-3">
          <FaBan /> Not Published
        </span>
        <button className="btn border ms-3">
          <FaEllipsisV className="ms-1" />
        </button>
      </div>
      <hr />

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === "Details" ? "active" : "text-danger"
            }`}
            onClick={() => setActiveTab("Details")}
          >
            Details
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === "Questions" ? "active" : "text-danger"
            }`}
            onClick={() => setActiveTab("Questions")}
          >
            Questions
          </a>
        </li>
      </ul>

      <div>
        {activeTab === "Details" && <QuizDetailsEditor />}
        {activeTab === "Questions" && <QuizQuestionsEditor />}
      </div>
    </div>
  );
}
