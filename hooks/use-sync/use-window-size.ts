import { useState, useLayoutEffect, useEffect } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    const handle = () => {
      console.log("resize event in useWindowSize", window.innerWidth);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('resize', handle);
    }
  }, []);

  return {
    width,
    height,
  }
}
