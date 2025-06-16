import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import { ModalContextProvider } from "./ModalContext";

const Provider = ({ children }) => {
  console.log(children);
  return (
    <ThemeContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
