import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import Result from './Result';

const Quiz = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which language is used for web development?',
      options: ['Java', 'Python', 'JavaScript', 'C++'],
      correctAnswer: 'JavaScript',
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
  ];

  const initialState = {
    currentQuestionIndex: 0,
    score: 0,
    quizFinished: false,
  };

  const [quizState, setQuizState] = useState(initialState);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setQuizState((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
      }));
    }

    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState((prevState) => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }));
    } else {
      setQuizState((prevState) => ({
        ...prevState,
        quizFinished: true,
      }));
    }
  };

  const restartQuiz = () => {
    setQuizState(initialState);
  };

  if (quizState.quizFinished) {
    return <Result score={quizState.score} total={questions.length} restartQuiz={restartQuiz} />;
  }

  const { question, options } = questions[quizState.currentQuestionIndex];

  return (
    <div className="max-w-lg mx-auto mt-12">
      <QuestionCard question={question} options={options} handleAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;
