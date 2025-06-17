import { createContext } from "react";
import useSound from "../hooks/useSound";
// import clickAudio from "../assets/click.mp3";

export const SfxContext = createContext({});

export const SfxContextProvider = ({ children }) => {
  const options = {
    volume: 0.05,
    timeout: 200,
  };
  const hoverPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
  const clickPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";

  const winnerPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";

  const completedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";

  const hoverSfx = useSound(hoverPath, options);
  const clickSfx = useSound(clickPath, options);
  const winnerSfx = useSound(winnerPath, { ...options, timeout: 1000 });
  const completedSfx = useSound(completedPath, { ...options, timeout: 2000 });
  return (
    <SfxContext.Provider
      value={{ hoverSfx, clickSfx, winnerSfx, completedSfx }}
    >
      {children}
    </SfxContext.Provider>
  );
};
