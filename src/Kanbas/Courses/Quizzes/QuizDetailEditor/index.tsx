import React, {useState} from "react";
import {FaBan, FaEllipsisV} from "react-icons/fa";
import NewQuizNav from "../NewQuiz/NewQuizNav";
import {useNavigate} from "react-router-dom";
import "./styles.css";

function QuizDetailEditor() {

    const navigate = useNavigate();
    const [quizName, setQuizName] = useState("");
    const [quizInstructions, setQuizInstructions] = useState("");
    const [quizType, setQuizType] = useState("Graded Quiz");
    const [shuffleAnswers, setShuffleAnswers] = useState(false);
    const [multipeoAttempts, setMultipleAttempts] = useState(false);
    const [timeLimitEnabled, setTimeLimitEnabled] = useState(false);
    const [timeLimit, setTimeLimit] = useState("");
    const [assignTo, setAssignTo] = useState("Everyone");
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");

    return (
        <div>
            <div className="d-flex justify-content-end align-items-center text-center">
                <span>Points 20</span>
                <span className="ms-3">
          <FaBan/> Not Published
        </span>
                <button className="btn border ms-3">
                    <FaEllipsisV className="ms-1"/>
                </button>
            </div>
            <hr/>

            <NewQuizNav/>

            <div className="quiz-detail-editor">
                <div className="form-group">
                    <label>Quiz Name</label>
                    <input
                        type="text"
                        value={quizName}
                        onChange={(e) => setQuizName(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Instructions</label>
                    <textarea
                        value={quizInstructions}
                        onChange={(e) => setQuizInstructions(e.target.value)}
                        className="form-control"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Quiz Type</label>
                    <select
                        value={quizType}
                        onChange={(e) => setQuizType(e.target.value)}
                        className="form-control"
                    >
                        <option value="Graded Quiz">Graded Quiz</option>
                        <option value="Ungraded Quiz">Ungraded Quiz</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={shuffleAnswers}
                            onChange={() => setShuffleAnswers(!shuffleAnswers)}
                        />
                        Shuffle Answers
                    </label>
                </div>


                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={multipeoAttempts}
                            onChange={() => setMultipleAttempts(!multipeoAttempts)}
                        />
                        Allow Multiple Attempts
                    </label>
                </div>


                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={timeLimitEnabled}
                            onChange={() => setTimeLimitEnabled(!timeLimitEnabled)}
                        />
                        Time Limit
                    </label>
                    {timeLimitEnabled && (
                        <input
                            type="text"
                            value={timeLimit}
                            onChange={(e) => setTimeLimit(e.target.value)}
                            className="form-control"
                            placeholder="Enter time in minutes"
                        />
                    )}
                </div>

                <div className="form-group">
                    <label>Assign To</label>
                    <select
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        className="form-control"
                    >
                        <option value="Everyone">Everyone</option>
                        <option value="Undergraduates">Undergraduates</option>
                        <option value="Graduates">Graduates</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Due Date</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Available From</label>
                    <input
                        type="date"
                        value={availableFrom}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Until</label>
                    <input
                        type="date"
                        value={availableUntil}
                        onChange={(e) => setAvailableUntil(e.target.value)}
                        className="form-control"
                    />
                </div>
            </div>


            <hr/>

            <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="notifyUsers" className="">
                    <input type="checkbox" id="notifyUsers" name="notifyUsers"/> Notify
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

            <hr/>


        </div>

    );
}

export default QuizDetailEditor;