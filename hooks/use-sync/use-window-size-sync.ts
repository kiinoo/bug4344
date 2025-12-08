import { useState, useEffect, useLayoutEffect } from "react";


export function useSyncExternalStore<T>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => T,
  getServerSnapshot?: (() => T) | undefined
): T {
  const [state, setState] = useState(getSnapshot);

  useLayoutEffect(() => {
    function handleStoreChange() {
      const newState = getSnapshot();
      console.log("handleStoreChange", newState);
      setState(newState);
    }
    console.log("useSyncExternalStore subscribe");
    const unsub = subscribe(handleStoreChange);
    return () => {
      console.log("useSyncExternalStore unsubscribe");
      unsub();
    }
  }, [subscribe]);
  return state;
}

// ------------------------

function subscribe(onStoreChange: () => void) {
  console.log("subscribe resize");
  const handle = () => {
    onStoreChange();
    console.log("resize event in subscribe", window.innerWidth);
  };
  window.addEventListener('resize', handle);
  return () => {
    console.log("unsubscribe resize");
    window.removeEventListener('resize', handle);
  }
}

function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

let counter = 0;

export function useWindowSize2() {
  // useDebugValue(`xxx Size ${window.innerWidth} x ${window.innerHeight}`);
  return useSyncExternalStore(subscribe, () => {
    console.log(`counter ${counter++}`)
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  });
}
