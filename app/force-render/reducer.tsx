"use client"

import { useEffect, useReducer } from "react";

const fn = (s: any) => (s)

function reducer(state: any, action: any) {
  return state;
}

function MyChild() {
  console.log("MyChild is rendered");
  return <div>MyChild</div>;
}
function MyChild2() {
  console.log("MyChild2 is rendered");
  return <div>MyChild2</div>;
}

export default function App() {
  const render = useReducer(reducer, {})[1];
  console.log("ReducerApp is rendered");

  useEffect(() => {
    const id = setInterval(render, 1000);
    return () => clearInterval(id);
  }, [1000]);

  return (
    <div>
      <MyChild2 />
      <MyChild />
    </div>
  )
}