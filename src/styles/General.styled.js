import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.columnBased ? "column" : "row")};
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Title = styled.h1`
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.text};

  font-size: 4rem;

  background-color: transparent;
  font-family: "Pacifico", cursive;

  ${(props) => props.theme.media.mobile} {
    font-size: 5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.text};
  background-color: transparent;
  padding: 10px;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.text};
  background-color: transparent;
  padding: 10px;
`;
