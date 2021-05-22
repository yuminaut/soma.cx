import { BlipLink } from "./Blip";

export const ALink = ({ children, ...rest }) => {
  return <a {...rest}>{children}</a>;
};

export const SLink = ({ href, children, ...rest }) => {
  return (
    <BlipLink href={href}>
      <a {...rest}>{children}</a>
    </BlipLink>
  );
};
