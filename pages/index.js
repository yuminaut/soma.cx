import Head from "next/head";
import { useState } from "react";
import { Howl } from "howler";
import { Blip, DelayLink, Flicker } from "../components";

const dream = "/img/dream.gif";
const linePulse = "/img/linePulse.gif";
const skull = "/img/skull.gif";
const redSkull1 = "/img/redSkull1.gif";
const redSkull2 = "/img/redSkull2.gif";
const zoom = "/img/zoom.gif";
const earcing = "/audio/earcing.m4a";

export default function Welcome({ onClick, audio }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Head>
        <title>DANGER</title>
      </Head>
      <div className="welcome">
        <div style={{ background: "black", height: "100%" }}>
          {/*  because skulls are black */}
          <div className="welcome-overlay">
            <div className={clicked ? "activeOverlay" : "inactiveOverlay"}>
              <img src={zoom} alt="zoom" />
            </div>
          </div>
          <div className="welcome-main">
            <img src={dream} id="dream" alt="dream" />
            <div id="text">
              <Flicker>
                <div id="rules">
                  <img src={skull} id="skull" alt="skull" />
                  &nbsp;
                  <u>safety rules</u>
                  &nbsp;
                  <img src={skull} id="skull" alt="skull" />
                </div>
              </Flicker>
              <Flicker>
                <div id="list">
                  <ol>
                    <li>turn off your music</li>
                    <li>make sure sound is on</li>
                    <li>enter full-screen mode</li>
                    <li>sync your brainwaves with the Human Brain Interface</li>
                    <li>उपभूषति</li>
                  </ol>
                </div>
              </Flicker>
            </div>
            <img src={linePulse} id="linePulse" alt="linePulse" />
            <Flicker>
              <div id="enter">
                <img src={redSkull1} id="redSkull1" alt="skull" />
                <DelayLink
                  href="/home"
                  delay={2000}
                  onDelayStart={() => {
                    new Howl({
                      src: [earcing],
                      loop: false,
                      volume: 0.5,
                    }).play();
                    setClicked(true);
                  }}
                  onDelayEnd={() => {
                    audio.play();
                  }}
                >
                  <Blip>enter brain</Blip>
                </DelayLink>
                <img src={redSkull2} id="redSkull2" alt="skull" />
              </div>
            </Flicker>
          </div>
        </div>
      </div>
    </>
  );
}
