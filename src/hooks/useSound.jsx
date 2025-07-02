import React, { useEffect, useState } from "react";

const useSound = (url, options) => {
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const audio = new Audio(url);

    audio.load();
    audio.volume = options.volume;
    setSound(audio);
  }, [url, options.volume]);

  if (sound)
    return () => {
      sound.play();
      setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
      }, options.timeout);
    };

  return <div>useSound</div>;
};

export default useSound;
