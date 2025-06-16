import { useState } from "react";

export const useModal = () => {
  // the modal
  const [modal, setModal] = useState(false);
  //   modal content
  const [modalContent, setModalContent] = useState("I am the modal");

  const handleModal = (content = false) => {
    setModal((prevState) => !prevState);
    if (content) setModalContent(content);
  };
  return { modal, modalContent, handleModal };
};
