import React from 'react';

const Result = ({ score, total , restartQuiz}) => {

  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center text-black">
      <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
      <p className="text-lg mb-4">Your score: {score} / {total}</p>
      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
