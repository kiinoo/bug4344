import { useState, useEffect, useLayoutEffect } from "react";
import { EventEmitter } from "stream";


export function useSyncExternalStore<T>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => T,
  getServerSnapshot?: (() => T) | undefined
): T {
  const [state, setState] = useState(getSnapshot);

  useLayoutEffect(() => {
    function handleStoreChange() {
      const newState = getSnapshot();
      setState(newState);
    }
    return subscribe(handleStoreChange);
  }, [subscribe]);
  return state;
}

// ------------------------

function subscribe(onStoreChange: () => void) {
  window.addEventListener('resize', onStoreChange);
  return () => {
    window.removeEventListener('resize', onStoreChange);
  }
}

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

function subscribe2(onStoreChange: () => void) {
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

export function useSyncExternalStore3<T>(
  eventemitter: EventEmitter,
  getSnapshot: () => T,
  getServerSnapshot?: (() => T) | undefined
): T {
  const [state, setState] = useState(getSnapshot);

  useLayoutEffect(() => {
    function handleStoreChange() {
      const newState = getSnapshot();
      setState(newState);
    }
    eventemitter.on('change', handleStoreChange)
    return () => {
      eventemitter.off('change', handleStoreChange)
    };
    // return subscribe(handleStoreChange);
  }, [eventemitter]);
  return state;
}
