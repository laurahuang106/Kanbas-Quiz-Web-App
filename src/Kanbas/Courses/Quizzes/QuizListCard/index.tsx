import React, { useState } from 'react';

export interface Quiz {
    _id: string;
    title: string;
    course: string;
    dueDate: string;
    availableDate: string;
    points: number;
    body: string;
    questions: number;
    status: 'available' | 'overdue' | 'not available yet';
    published: boolean;
}

function QuizListCard({ quiz } : {quiz : Quiz}) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="container my-4">
            <div className="card">

                <div className="card-body d-flex justify-content-between" style={{ borderLeft: quiz.published ? '5px solid green' : 'none' }}>
                    <div>
                        <h5 className="card-title">{quiz.title}</h5>
                        <div className="d-flex justify-content-start">
                            <span className="card-text">{quiz.status}</span>
                            <span className="mx-2">|</span>
                            <span className="card-text">Due Date: {quiz.dueDate}</span>
                            <span className="mx-2">|</span>
                            <span className="card-text">Points: {quiz.points}</span>
                            <span className="mx-2">|</span>
                            <span className="card-text">Questions: {quiz.questions}</span>
                        </div>
                    </div>
                    <div>
                        {quiz.published ? (
                            <i className="fas fa-check" style={{ color: 'green', marginRight: '15px' }}></i>
                        ) : (
                            <i className="fas fa-times" style={{ color: 'red', marginRight: '15px' }}></i>
                        )}

                        <i className="fas fa-ellipsis-v" onClick={toggleMenu}></i>
                        {showMenu && (
                            <ul className="dropdown-menu show">
                                <li><button className="dropdown-item" type="button">Edit</button></li>
                                <li><button className="dropdown-item" type="button">Delete</button></li>
                                <li><button className="dropdown-item" type="button">Copy</button></li>
                                <li><button className="dropdown-item" type="button">Sort</button></li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        {quiz.published ? 'Unpublish' : 'Publish'}
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
}


export default QuizListCard;