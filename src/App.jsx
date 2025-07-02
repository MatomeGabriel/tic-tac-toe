import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { ModalContextProvider } from "./contexts/ModalContext";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyle />
        <Router />
        <MusicPlayer />
      </ModalContextProvider>
    </ThemeProvider>
  );
};

export default App;
