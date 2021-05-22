import { useState, useEffect } from "react";

export const Flicker = ({ children, rest }) => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      let o = opacity;
      o += (-0.5 + Math.random()) * (0.05 + 0.1 * Math.random());
      o = clamp(o, 0.75, 1.0);
      setOpacity(o);
    }, 75);
    return () => clearInterval(interval);
  }, [children, children.length, opacity]);
  return (
    <span style={{ display: "inline", opacity: opacity }} {...rest}>
      {children}
    </span>
  );
};

export const BigFlicker = ({ children, rest }) => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      let o = opacity;
      o += (-0.5 + Math.random()) * 0.6;
      o = clamp(o, 0, 1.0);
      setOpacity(o);
    }, 120);
    return () => clearInterval(interval);
  }, [children, children.length, opacity]);
  return (
    <span style={{ display: "inline", opacity: opacity }} {...rest}>
      {children}
    </span>
  );
};

const clamp = (num, min, max) => {
  if (num < min) {
    return min;
  } else if (num > max) {
    return max;
  } else {
    return num;
  }
};
