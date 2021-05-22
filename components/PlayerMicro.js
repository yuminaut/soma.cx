import { useEffect, useState } from "react";
import { BlipA } from "./Blip";

// https://somafm.com/linktous/

export const PlayerMicro = ({ audio, paused, toggleAudio }) => {
  const [text, setText] = useState(
    audio && !audio.paused ? "pause" : "\u00a0play"
  );

  useEffect(() => {
    if (audio == null) return;
    setText(audio.paused ? "\u00a0play" : "pause");
  }, [audio, paused]);

  return (
    <>
      {text}: [m] or <BlipA onClick={toggleAudio}>click</BlipA>
    </>
  );
};
