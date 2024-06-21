import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNext = () => {
    // Check if an answer has been selected
    if (selectedAnswer !== null) {
      // Check if there are more questions
      if (currentQuestion + 1 < questions.length) {
        // Check if the selected answer is correct
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
          // Increase score
          setScore(score + 1);
        }
        setSelectedAnswer(null); // Reset selected answer
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz is finished
        alert(`Quiz finished! Your score is ${score}/${questions.length}`);
      }
    } else {
      alert("Please select an answer before proceeding.");
    }
  };

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  return (
    <div className='quizQuestion'>
      <p className='title'>Question {currentQuestion + 1}</p>
      <p className='question'>{questions[currentQuestion].question}</p>
      <ul>
        {questions[currentQuestion].answers.map((answer, index) => (
          <li 
            key={index} 
            onClick={() => handleAnswerClick(index)}
            style={{
              background: selectedAnswer === index ? '#b6babb' : 'none',
              color: selectedAnswer === index ? '#fff' : '#000'
            }}
          >
            {answer}
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Quiz;
