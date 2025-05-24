import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../../contexts/GameContext";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, checkForWinner } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board);

    // if (result) updateBoard(index);
  };

  return <CellStyle onClick={() => cellClickHandler()}>{cellItem}</CellStyle>;
};

export default GameCell;
