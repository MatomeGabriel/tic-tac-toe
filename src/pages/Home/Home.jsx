import React from "react";
import { Subtitle, Title, Container } from "../../styles/General.styled";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends, higher score wins</Subtitle>
      <Button onClick={() => navigate("/game-on")}>Play now</Button>
    </Container>
  );
};

export default Home;
