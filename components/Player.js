import { useState, useEffect } from "react";
import styled from "styled-components";
import { useToggle, useKeyBind } from "./../hooks";

const speakerOn = "/img/speaker-on.gif";
const speakerOff = "/img/speaker-off.gif";
const somafm = "/img/somafm.gif";

// https://somafm.com/linktous/

export const Player = ({ audio, changed }) => {
  const [speaker, setSpeaker] = useState(audio && !audio.paused ? speakerOn : speakerOff);

  const toggle = useToggle(audio === null ? true : audio.paused, () => {
    if (audio === null) return;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    setSpeaker(audio.paused ? speakerOff : speakerOn);
  });

  useKeyBind("m", toggle);

  // Runs when the user comes from the welcome screen; `changed` forces this
  useEffect(() => {
    if (audio === null) return;
    console.log(audio.paused ? "Audio is PAUSED" : "Audio is PLAYING");
    setSpeaker(audio.paused ? speakerOff : speakerOn);
  }, [audio, changed]);

  return (
    <Style>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="https://somafm.com/" rel="noreferrer" target="_blank">
                <img src={somafm} id="soma" alt="SomaFM commercial free internet radio" />
              </a>
            </td>
            <td>
              <img src={speaker} id="speaker" alt="speaker" onClick={toggle} />
            </td>
          </tr>
          <tr>
            <td id="playPauseText" colSpan="2">
              play/pause: m or ⇧
            </td>
          </tr>
        </tbody>
      </table>
    </Style>
  );
};

const Style = styled.div`
  background: black;
  color: var(--text-color);
  border: 2px solid var(--text-color);
  padding: 5px;
  font-size: 0.9em;
  text-shadow: none;

  #soma,
  #speaker {
    height: 100px;
    display: block;
    cursor: pointer;
  }

  #playPauseText {
    padding-top: 5px;
    text-align: center;
  }
`;
