import React from 'react';

const QuestionCard = ({ question, options, handleAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full text-left p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
