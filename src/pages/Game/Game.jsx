import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoardStyle } from "./Game.styled";
import GameCell from "./GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";
import Player from "../../components/Player/Player";

const Game = () => {
  const { game } = useContext(GameContext);
  const { board } = game;

  return (
    <Container>
      <Player
        player={game.player1}
        isPlayerActive={game.player1.choice === game.turn}
      />
      <GameBoardStyle>
        {board.map((cellItem, index) => (
          <GameCell
            key={index}
            cellItem={cellItem}
            index={index}
            isWinningCell={game?.winningCombo?.includes(index)}
          />
        ))}
      </GameBoardStyle>
      <Player
        player={game.player2}
        isPlayerActive={game.player2.choice === game.turn}
      />
    </Container>
  );
};

export default Game;
