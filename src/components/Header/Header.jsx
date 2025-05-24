import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from "./Header.styled";

import Logo from "../../assets/tic-tac-toe-icon.svg?react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo onClick={() => navigate("/")} className="logo" />
      <span onClick={toggleTheme}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </span>

      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      {/* <LightModeIcon /> */}
    </HeaderWrapper>
  );
};

export default Header;
