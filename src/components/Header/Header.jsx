import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from "./Header.styled";

import Logo from "../../assets/tic-tac-toe-icon.svg?react";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo
        onClick={() => {
          clickSfx();
          navigate("/");
        }}
        className="logo"
        onMouseEnter={() => hoverSfx()}
      />
      <span
        onClick={() => {
          clickSfx();
          toggleTheme();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </span>

      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      {/* <LightModeIcon /> */}
    </HeaderWrapper>
  );
};

export default Header;
