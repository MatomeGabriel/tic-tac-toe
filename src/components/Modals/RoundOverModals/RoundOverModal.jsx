import React, { useContext } from "react";
import { Subtitle, Title } from "../../../styles/General.styled";
import Button from "../../Button/Button";
import { ModalFooter, ModalHeader, ModalBody } from "../../Modal/Modal.styled";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";

const RoundOverModal = () => {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins Round`
            : "Round is draw"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched now.</Subtitle>
        <Subtitle primary>
          {game.player1.name}: {game.player1.score}
        </Subtitle>
        <Subtitle primary>
          {game.player2.name}: {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}>
          Continue
        </Button>
        <Button color="#8437f9">Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
