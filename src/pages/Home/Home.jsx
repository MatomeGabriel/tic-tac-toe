import React, { useContext } from "react";
import { Subtitle, Title, Container } from "../../styles/General.styled";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { SfxContext } from "../../contexts/SfxContext";

const Home = () => {
  const navigate = useNavigate();

  const { hoverSfx, clickSfx } = useContext(SfxContext);

  return (
    <Container columnBased>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends, higher score wins</Subtitle>
      <Button
        onMouseEnter={() => hoverSfx()}
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
      >
        Play now
      </Button>
    </Container>
  );
};

export default Home;
