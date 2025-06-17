import { useContext } from "react";

import { createPortal } from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalBackdrop, ModalContainer } from "./Modal.styled";

const ModalTemplate = () => {
  const { modalContent, modal } = useContext(ModalContext);

  if (modal) {
    return createPortal(
      <ModalBackdrop>
        <ModalContainer>{modalContent}</ModalContainer>
      </ModalBackdrop>,
      document.getElementById("modal-root")
    );
  }

  return null;
};

export default ModalTemplate;
