import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoardStyle } from "./Game.styled";
import GameCell from "./GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";

const Game = () => {
  const { game } = useContext(GameContext);
  const { board } = game;
  return (
    <Container>
      <GameBoardStyle>
        {board.map((cellItem, index) => (
          <GameCell key={index} cellItem={cellItem} index={index} />
        ))}
      </GameBoardStyle>
    </Container>
  );
};

export default Game;
