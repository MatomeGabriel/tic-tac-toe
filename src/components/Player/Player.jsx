
import { PLayerWrapper, AvatarWrapper } from "./Player.styled";
import Avatar from "react-nice-avatar";
import { Subtitle } from "../../styles/General.styled";

const Player = ({ player, isPlayerActive }) => {
  // for pre-defined background colors.
  // const updatedAvatarConfig = { ...player.avatarConfig, bgColor: player.color };
  return (
    <PLayerWrapper>
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>

      <Subtitle>
        {player.name} ({player.choice.toUpperCase()})
      </Subtitle>
      <Subtitle>{player.score}</Subtitle>
    </PLayerWrapper>
  );
};

export default Player;
