import { useForceRender } from "@/hooks/use-force-render";
import { createContext, useContext, useMemo, useRef } from "react";

const Context = createContext({});

export default function App() {
  return (
    <Parent lastChild={<ChildC />}>
      <ChildB />
    </Parent>
  );
}

function Parent({ children, lastChild }: any) {
  useForceRender(2000);
  const contextValue = {};
   const memoizedCxtValue = useMemo(()=>contextValue, [])
  //  const memoizedCxtValue = useRef(contextValue)
  console.log("Parent is rendered");
  return (
    <div className="parent">
      <Context.Provider value={memoizedCxtValue}>
        <ChildA />
        {children}
        {lastChild}
      </Context.Provider>
    </div>
  );
}

function ChildA() {
  console.log("ChildA is rendered");
  return <div className="childA"></div>;
}

function ChildB() {
  console.log("ChildB is rendered");
  return <div className="childB"></div>;
}

function ChildC() {
  console.log("ChildC is rendered");
  const value = useContext(Context)
  return <div className="childC"></div>;
}