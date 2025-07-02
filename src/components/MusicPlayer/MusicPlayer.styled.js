import styled from "styled-components";
import { MdPlayArrow, MdPause, MdSkipNext } from "react-icons/md";

export const MusicPlayerWrapper = styled.div`
position: fixed
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin-bottom: 2rem;
  width: 100vw
`;

export const PlayIcon = styled(MdPlayArrow)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  cursor: pointer;
`;
export const PauseIcon = styled(MdPause)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  cursor: pointer;
`;
export const NextIcon = styled(MdSkipNext)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  cursor: pointer;
`;
