import { useEffect, useReducer } from "react";

export function useForceRender(interval: number) {
  const render = useReducer(() => ({}), {})[1];
  useEffect(() => {
    const id = setInterval(render, interval);
    return () => clearInterval(id);
  }, [interval]);
}