import { useState, useLayoutEffect, useDebugValue, useDeferredValue } from "react";


export function useSyncExternalStore<T>(
  subscribe: (onStoreChange: () => void) => () => void, 
  getSnapshot: () => T, 
  getServerSnapshot?: (() => T) | undefined
): T {
  const [state, setState] = useState(getSnapshot);

  useLayoutEffect(() => {
    function handleStoreChange() {
      const newState = getServerSnapshot? getServerSnapshot() : getSnapshot();
      setState(newState);
    }
    return subscribe(handleStoreChange);
  }, [subscribe, getSnapshot, getServerSnapshot]);
  return state;
}

// ------------------------

function subscribe(onStoreChange: () => void) {
   window.addEventListener('resize', onStoreChange);
   window.addEventListener('resize', ()=> {
      console.log("resize event in subscribe", window.innerWidth);
   });
   return () => window.removeEventListener('resize', onStoreChange);
}
export function useWindowSize2() {
  // useDebugValue(`xxx Size ${window.innerWidth} x ${window.innerHeight}`);
  return useSyncExternalStore(subscribe, () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }), () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
}
