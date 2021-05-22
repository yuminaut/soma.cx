import { useState, useEffect } from "react";

export const useToggle = (initial, callback) => {
  const [toggled, setToggled] = useState(initial);
  return [
    toggled,
    () => {
      setToggled(!toggled);
      callback();
    },
  ];
};

export const useKeyBind = (targetKey, f) => {
  useEffect(() => {
    const downHandler = ({ key }) => {
      // TODO: This is a hack to prevent music from toggling when typing
      if (document.activeElement.classList.contains("preventToggle")) {
        return;
      }

      if (key === targetKey) {
        f();
      }
    };
    document.addEventListener("keydown", downHandler);
    return () => {
      document.removeEventListener("keydown", downHandler);
    };
  }, [targetKey, f]);
};
