import React, { useState } from "react";

export const GameContext = React.createContext();

export const Provider = (props) => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  const handleNewGame = false;
  const handleRevealAnswer = false;
  const handleUpdateScore = false;

  return (
    <GameContext.Provider
      value={{
        score,
        isAnswerRevealed,
        questions,
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
