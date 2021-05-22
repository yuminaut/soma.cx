import "../styles/reset.css";
import "../styles/defaults.css";
import "../styles/globals.scss";

import "../styles/topbar.scss";
import "../styles/app.scss";

import "../styles/chat.scss";
import "../styles/404.scss";
import "../styles/about.scss";
import "../styles/aphorisms.scss";
import "../styles/archive.scss";
import "../styles/birdsong.scss";
import "../styles/breathing.scss";
import "../styles/buildings.scss";
import "../styles/colortool.scss";
import "../styles/death.scss";
import "../styles/default-page.scss";
import "../styles/docs.scss";
import "../styles/energy.scss";
import "../styles/favorites.scss";
import "../styles/home.scss";
import "../styles/khoomei.scss";
import "../styles/links.scss";
import "../styles/network.scss";
import "../styles/nutrition.scss";
import "../styles/recipes.scss";
import "../styles/remedies.scss";
import "../styles/supplements.scss";
import "../styles/thenightsong.scss";
import "../styles/threats.scss";
import "../styles/welcome.scss";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Player, Sidebar, Topbar } from "../components";
import { useKeyBind, useToggle } from "../hooks";

const music = {
  groovesalad: "https://ice5.somafm.com/groovesalad-256-mp3",
  gsclassic: "https://ice5.somafm.com/gsclassic-128-mp3",
  // TODO: Let user choose channel
};

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(music.groovesalad));
  }, []);

  const [paused, toggleAudio] = useToggle(
    audio === null ? true : audio.paused,
    () => {
      if (audio === null) return;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  );

  useKeyBind("m", toggleAudio);

  if (router.pathname === "/") {
    return <Component {...pageProps} audio={audio} />;
  }

  // TODO: Use an AudioContext instead of prop drilling.
  const topbar = (
    <Topbar
      className="topbar"
      audio={audio}
      paused={paused}
      toggleAudio={toggleAudio}
    />
  );

  // TODO this needs renaming
  return (
    <div className="app-layout" style={{ height: "100%" }}>
      {/* <div className="flex-sidebar" style={{ height: "100%" }}>
        <Sidebar>
          <Player audio={audio} changed={changed} />
        </Sidebar>
      </div> */}
      {/* <div style={{ display: "none" }}>
        <Player audio={audio} changed={changed} />
      </div> */}
      <div className="flex-content" style={{ height: "100%" }}>
        {/* <div className="app-content"> */}
        {/* <div id="content"> */}
        <Component
          {...pageProps}
          topbar={topbar}
          audio={audio}
          setAudio={setAudio}
        />
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default App;
