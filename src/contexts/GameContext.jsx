import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: { choice: "x", name: "Gabriel" },
    player2: { choice: "o", name: "Computer" },
    turn: "x",
  });

  const updateBoard = (index) => {
    const updateBoard = game.board;
    updateBoard[index] = game.turn;
    setGame({
      ...game,
      board: updateBoard,
      turn: game.turn === "x" ? "o" : "x",
    });
  };

  const checkForSequence = (option1, option2, option3) => {
    return option1 === option2 && option2 === option3;
  };

  const checkForWinner = (board) => {
    // 0 1 2
    // 3 4 5
    // 6 7 8
    // Rows
    for (let i = 0; i < 3; i++) {
      if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
        console.log("Column winner");
        return true;
      }
    }

    for (let i = 0; i < 9; i += 3) {
      if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
        console.log("Row Winner");
        return true;
      }
    }

    // 1. Diagonals

    if (board[0] === board[4] && board[4] === board[8]) {
      console.log("Diagonal winner");
      return true;
    }

    if (board[2] === board[4] && board[4] === board[6]) {
      console.log("Diagonal winner");
      return true;
    }
  };

  return (
    <GameContext.Provider value={{ game, updateBoard, checkForWinner }}>
      {children}
    </GameContext.Provider>
  );
};
