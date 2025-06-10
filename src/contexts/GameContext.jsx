import { createContext, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
export const GameContext = createContext({});

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    // ...existing code...,
    player1: {
      choice: "x",
      name: "Gabriel",
      score: 0,
      color: "#8437f9",
      avatarConfig: genConfig(),
    },
    player2: {
      choice: "o",
      name: "Computer",
      score: 0,
      color: "#f9c811",
      avatarConfig: genConfig(),
    },
    turn: "x",
    roundWinner: "",
  });

  const updateBoard = (index) => {
    // copy the board
    const updateBoard = game.board;
    // 2.set the index where the click happened and set it to the current turn
    updateBoard[index] = game.turn;

    // 3. change our state
    setGame({
      ...game,
      board: updateBoard,
      turn: game.turn === "x" ? "o" : "x",
    });
  };

  const checkForSequence = (option1, option2, option3) => {
    if (option1 === null || option2 === null || option3 === null) return false;
    return option1 === option2 && option2 === option3;
  };

  const checkForWinner = (board) => {
    // 0 1 2
    // 3 4 5
    // 6 7 8
    // Rows
    for (let i = 0; i < 3; i++) {
      if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
        return true;
      }
    }

    for (let i = 0; i < 9; i += 3) {
      if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
        return true;
      }
    }

    // 1. Diagonals

    if (checkForSequence(board[0], board[4], board[8])) {
      return true;
    }

    if (checkForSequence(board[2], board[4], board[6])) {
      return true;
    }

    // check if game has drawn

    if (!board.includes(null)) {
      return "draw";
    }

    return false;
  };

  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
    });
  };

  const toggleChoice = (choice) => (choice === "x" ? "o" : "x");
  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "x",
    }));
  };

  const updateScore = (winner) => {
    // winner is always going to be
    // winner player 1, player 2 or draw
    console.log("winner", winner);
    if (winner === "draw") {
      setGame((prevGame) => ({
        ...prevGame,
        player1: { ...prevGame.player1, score: prevGame.player1.score + 0.5 },
        player2: { ...prevGame.player2, score: prevGame.player2.score + 0.5 },
        roundWinner: "",
      }));
    } else {
      setGame((prevGame) => ({
        ...prevGame,
        [winner]: { ...prevGame[winner], score: prevGame[winner].score + 1 },
        roundWinner: game[winner],
      }));
    }
  };

  const roundComplete = (result) => {
    if (game.turn === game.player1.choice && result !== "draw") {
      //  player1: { choice: "x", name: "Gabriel", score: 0 },
      updateScore("player1");
    } else if (game.turn === game.player2.choice && result !== "draw") {
      updateScore("player2");
    } else {
      updateScore("draw");
    }
    switchTurn();
  };

  return (
    <GameContext.Provider
      value={{ game, updateBoard, checkForWinner, resetBoard, roundComplete }}>
      {children}
    </GameContext.Provider>
  );
};
