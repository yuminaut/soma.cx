import { SLink } from "./Links";

export const BackHome = () => (
  <div className="back-button">
    ← <SLink href="/home">Back</SLink>
  </div>
);

export const BackDocs = () => (
  <div className="back-button">
    ← <SLink href="/docs">Back</SLink>
  </div>
);

export const BackMisc = () => (
  <div className="back-button">
    ← <SLink href="/misc">Back</SLink>
  </div>
);

export const BackThreats = () => (
  <div className="back-button">
    ← <SLink href="/threats">Back</SLink>
  </div>
);
