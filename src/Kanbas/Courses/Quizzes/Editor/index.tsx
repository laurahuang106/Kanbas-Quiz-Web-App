import React, { useState } from "react";
import QuestionList from "../Questions/List";
import QuizQuestionsEditor from "./QuestionsEditor";

export default function Questions() {
  return (
    <div>
      <h2>Questions</h2>
      <QuizQuestionsEditor />
    </div>
  );
}
