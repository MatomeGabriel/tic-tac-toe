import { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../../contexts/GameContext";
import IconX from "../../../assets/icon-x.svg?react";
import IconO from "../../../assets/icon-o.svg?react";
import IconXOutline from "../../../assets/icon-x-outline.svg?react";
import IconOOutline from "../../../assets/icon-o-outline.svg?react";
import { ModalContext } from "../../../contexts/ModalContext";
import RoundOverModal from "../../../components/Modals/RoundOverModals/RoundOverModal";
import { SfxContext } from "../../../contexts/SfxContext";

const GameCell = ({ cellItem, index, isWinningCell }) => {
  console.log("Is Winning Cell :", isWinningCell);
  const { updateBoard, game, checkForWinner, roundComplete } =
    useContext(GameContext);

  const { hoverSfx, clickSfx, winnerSfx, completedSfx } =
    useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);
  const cellClickHandler = () => {
    // this index is retained by the function scope, this happens because of something known as closure.
    updateBoard(index);
    const result = checkForWinner(game.board);
    console.log(result);
    if (result) {
      roundComplete(result);
      if (result != "draw") {
        winnerSfx();
      }
      setTimeout(() => handleModal(<RoundOverModal />), 2500);
    }
  };

  // happens after re-render / when a user has clicked one of the cells
  // it replaces the cell with an icon and removes the event listener as well
  // meaning we can only select once
  if (cellItem === "x") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle
      onClick={() => {
        clickSfx();
        cellClickHandler();
      }}
      onMouseEnter={() => hoverSfx()}
    >
      {game.turn === "x" ? (
        <IconXOutline className="outlineIcon" />
      ) : (
        <IconOOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
