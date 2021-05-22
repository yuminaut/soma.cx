import Link from "next/link";
import { Howl } from "howler";
import { FadeLink, FadeNavLink } from "./Fade";
const blip1 = "/audio/blip1.m4a";
const blip2 = "/audio/blip2.m4a";

const enterSound = new Howl({ src: [blip1], volume: 0.5 });
const clickSound = new Howl({ src: [blip2], volume: 0.5 });

export const Blip = ({ children }) => (
  <span
    // onMouseEnter={() => enterSound.play()}
    onClick={() => clickSound.play()}
  >
    {children}
  </span>
);

export const withBlip = (Component) => (props) => (
  <Blip>
    <Component {...props} />
  </Blip>
);

export const BlipA = ({ children, ...rest }) => (
  <Blip>
    <a {...rest}>{children}</a>
  </Blip>
);

export const BlipLink = withBlip(Link);
export const BlipFadeLink = withBlip(FadeLink);
export const BlipFadeNavLink = withBlip(FadeNavLink);
// export const BlipFadeBack = withBlip(FadeBack);
