import { useForceRender } from "@/hooks/use-force-render";
import { createContext, useContext, useMemo, useRef, useState } from "react";

const Context = createContext({});

export default function App() {
  return (
    <Parent lastChild={<ChildC />}>
      <ChildB />
    </Parent>
  );
}

function Parent({ children, lastChild }: any) {
  const [count, setCount] = useState(0);
  console.log("Parent is rendered");
  return (
    <div className="parent">
      {count}
      <button className="border" onClick={() => setCount(0)}>Increment</button>
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