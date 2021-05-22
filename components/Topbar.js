import { Flicker } from ".";
import { SLink } from "./Links.js";
import { PlayerMicro } from "./PlayerMicro.js";

export const Topbar = ({ audio, paused, toggleAudio }) => (
  <div className="topbar">
    <div className="left">
      <Header />
    </div>
    <div className="right">
      <PlayerMicro audio={audio} paused={paused} toggleAudio={toggleAudio} />
    </div>
  </div>
);

const Header = () => (
  <div className="header">
    <SLink href="/home" className="header-link">
      <span className="pink">[</span>
      <Flicker>soma.cx</Flicker>
      <span className="pink">]</span>
    </SLink>
  </div>
);
