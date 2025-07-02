import {
  MusicPlayerWrapper,
  PlayIcon,
  PauseIcon,
  NextIcon,
} from "./MusicPlayer.styled";
import playlist from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils";
import { useContext, useEffect, useRef, useState } from "react";
import { SfxContext } from "../../contexts/SfxContext";
import { Text } from "../../styles/General.styled";

const MusicPlayer = () => {
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const [isPlaying, setIsPLaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playlist));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      playerRef.current.volume = 0.1;
      setPlayPromise(promise);
      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPLaying(false);
    });
    setCurrentSong(randomizeIndex(playlist));
    setIsPLaying(true);
  };
  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onMouseEnter={() => hoverSfx()}
          onClick={() => {
            setIsPLaying(false);
            clickSfx();
          }}
        />
      ) : (
        <PlayIcon
          onMouseEnter={() => hoverSfx()}
          onClick={() => {
            setIsPLaying(true);
            clickSfx();
          }}
        />
      )}

      <NextIcon
        onMouseEnter={() => hoverSfx()}
        onClick={() => {
          shuffleHandler();
          clickSfx();
        }}
      />
      <audio
        ref={playerRef}
        src={playlist[currentSong]}
        onEnded={() => shuffleHandler()}
      ></audio>
      <Text>{playlist[currentSong]}</Text>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
