import {useParams, useNavigate} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import QuizListCard from "./QuizListCard";
import {Quiz} from "./QuizListCard"
import React from "react";

function Quizzes() {
    const {courseId} = useParams();
    const navigate = useNavigate();

    const quizzes: Quiz[] = [
        {
            _id: "1",
            title: "JavaScript Basics",
            course: "Web Development",
            dueDate: "2024-04-10",
            availableDate: "2024-03-20",
            points: 10,
            body: "This quiz covers the basics of JavaScript, including variables, functions, and loops.",
            questions: 5,
            status: "available",
            published: true,
        },
        {
            _id: "2",
            title: "React Introduction",
            course: "Frontend Development",
            dueDate: "2024-05-15",
            availableDate: "2024-04-25",
            points: 15,
            body: "This quiz focuses on the fundamental concepts of React, including components, state, and props.",
            questions: 10,
            status: "not available yet",
            published: true,
        },
        {
            _id: "3",
            title: "Node.js Overview",
            course: "Backend Development",
            dueDate: "2024-06-20",
            availableDate: "2024-05-30",
            points: 20,
            body: "This quiz tests your knowledge on Node.js, covering topics like asynchronous programming and Express.js.",
            questions: 8,
            status: "overdue",
            published: false,
        }
    ];


    return (
        <div>
            <h1>Quizzes Landing Page</h1>
            <button
                className="btn btn-danger d-flex align-items-center"
                onClick={() => {
                    navigate(`/Kanbas/Courses/${courseId}/Quizzes/New/Questions`);
                }}
            >
                <FaPlus className="me-2"/>
                Quiz
            </button>

            {/* implement quizz list screen below*/}

            <div>
                <div className="container my-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>
                                Assignment Quizzes
                            </h5>
                        </div>
                    </div>
                </div>

                {quizzes.map((quiz) => (
                    <QuizListCard key={quiz._id} quiz={quiz}/>
                ))}
            </div>

            {/* quiz list screen end */}

            {/* sample quiz, for quiz-edit-function purpose */}
            <button
                className="btn btn-link"
                onClick={() => {
                    navigate(`/Kanbas/Courses/${courseId}/Quizzes/q1`);
                }}
            >
                Sample-Quiz
            </button>
        </div>
    );
}

export default Quizzes;
