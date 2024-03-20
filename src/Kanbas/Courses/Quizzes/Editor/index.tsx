import React, { useState } from "react";

interface TrueFalseQuestionProps {
  question: string;
  points: number;
  onAnswerSubmit: (answer: boolean) => void;
}

const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({
  question,
  points,
  onAnswerSubmit,
}) => {
  const [answer, setAnswer] = useState<boolean | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (answer !== null) {
      onAnswerSubmit(answer);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question Title:</label>
        <select>
          <option value="true-false">True/False</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="fill-in-the-blank">Fill in the Blank</option>
          {/* Add more question types if needed */}
        </select>
        <span>pts: {points}</span>
      </div>
      <div>
        <label>
          Enter your question text, then select if True or False is the correct
          answer:
        </label>
        <h4>Question</h4>
        <br />
        <button type="button">Edit</button>
        <button type="button">View</button>
        <button type="button">Insert</button>
        <button type="button">Format</button>
        <button type="button">Tools</button>
        <button type="button">Table</button>
        <br />

        {/* dropdown button for font size */}
        


        <textarea defaultValue={question} readOnly />
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="answer"
            value="true"
            onChange={() => setAnswer(true)}
          />
          True
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="false"
            onChange={() => setAnswer(false)}
          />
          False
        </label>
      </div>
      <button type="button">Cancel</button>
      <button type="submit">Update Question</button>
    </form>
  );
};

export default TrueFalseQuestion;
