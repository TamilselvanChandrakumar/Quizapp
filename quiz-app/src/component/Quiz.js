import React, { useState } from "react";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      questiontext: "Who is prime minister of India?",
      answerOptions: [
        {
          answerText: "Vijay Rupani",
          isCorrect: false,
        },
        {
          answerText: "Manmohan Singh",
          isCorrect: false,
        },
        {
          answerText: "Narendira Modi",
          isCorrect: true,
        },
        {
          answerText: "Deep Patel",
          isCorrect: false,
        },
      ],
    },
    {
      questiontext: "Who is CEO of Tata",
      answerOptions: [
        {
          answerText: "Jeff Bezos",
          isCorrect: false,
        },

        {
          answerText: "Ratan Tata",
          isCorrect: true,
        },
        {
          answerText: "Mukesh Ambani",
          isCorrect: false,
        },
        {
          answerText: "Gautam Adani",
          isCorrect: false,
        },
      ],
    },
    {
      questiontext: "Who is the richest person in the world?",
      answerOptions: [
        {
          answerText: "Jhef Bezos",
          isCorrect: false,
        },
        {
          answerText: "Elon Musk",
          isCorrect: true,
        },
        {
          answerText: "Mukesh Ambani",
          isCorrect: false,
        },
        {
          answerText: "Warren Buffet",
          isCorrect: false,
        },
      ],
    },
    {
      questiontext: "How many countries in the world?",
      answerOptions: [
        {
          answerText: "120",
          isCorrect: false,
        },
        {
          answerText: "183",
          isCorrect: false,
        },
        {
          answerText: "170",
          isCorrect: false,
        },
        {
          answerText: "195",
          isCorrect: true,
        },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showscore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <div className="container">
        <h2 className="quizText">Quiz</h2>
        <div>
          {showscore ? (
            <>
              <div className="resultText">
                you scored {score} out of {questions.length}
              </div>
            </>
          ) : (
            <>
              <div className="quesNumber">
                Question {currentQuestion + 1}{" "}
                <span className="quesLength">{questions.length}</span>
              </div>
              <div className="quesText">
                {questions[currentQuestion].questiontext}
              </div>
              <div className="ansbtn">
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions) => (
                    <button
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
