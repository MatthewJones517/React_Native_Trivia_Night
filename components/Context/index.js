import React, { useState } from "react";

export const GameContext = React.createContext();

export const Provider = (props) => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleNewGame = async () => {
    // Flip questions loading flag
    setQuestionsLoading(true);

    try {
      // Get 20 Questions from the Jeopardy API (http://jservice.io/)
      const result = await fetch("http://jservice.io/api/random?count=20");

      if (!result.ok) {
        // If something went wrong, exit this function and report the
        // issue to the user.
        setQuestionsLoading(false);
      }

      // Convert returned value to JSON
      const returnedQuestions = await result.json();

      // Filter out the questions that have been reported as Invalid
      // (Require a picture, audio clip, etc...). Also, the API has some
      // badly sanitized data, so this checks for that as well.
      const filteredQuestions = returnedQuestions.filter((question) => {
        return (
          question.invalid_count === null &&
          question.value !== null &&
          question.question !== null &&
          question.answer !== null
        );
      });

      // Make sure we have at least 10 questions. If not, keep pinging the API
      // until we have 10 good questions.
      if (filteredQuestions.length < 10) {
        handleNewGame();
        return;
      }

      // Add the new questions to state
      setQuestions(filteredQuestions);

      // Flip the questions loading flag back.
      setQuestionsLoading(false);
    } catch (e) {
      setQuestionsLoading(false);
    }
  };

  const handleRevealAnswer = () => {
    setIsAnswerRevealed(true);
  };
  const handleUpdateScore = (answeredCorrectly) => {
    setIsAnswerRevealed(false);

    if (answeredCorrectly) {
      setScore((prevScore) => {
        return prevScore + questions[questionNumber - 1].value;
      });
    }

    if (questionNumber <= 10) {
      setQuestionNumber((prevQuestionNumber) => {
        return prevQuestionNumber + 1;
      });
    }
  };

  return (
    <GameContext.Provider
      value={{
        score,
        isAnswerRevealed,
        questions,
        questionsLoading,
        questionNumber,
        actions: {
          updateScore: handleUpdateScore,
          revealAnswer: handleRevealAnswer,
          newGame: handleNewGame,
        },
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
