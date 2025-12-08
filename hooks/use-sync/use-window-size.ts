import { useState, useLayoutEffect, useEffect } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      console.log("resize event", window.innerWidth);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    }
  }, []);

  return {
    width,
    height,
  }
}
