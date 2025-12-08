import { useForceRender } from "@/hooks/use-force-render";

export default function App() {
  return (
    <Parent lastChild={<ChildC />}>
      <ChildB />
    </Parent>
  );
}

function Parent({ children, lastChild }: any) {
  useForceRender(2000);
  console.log("Parent is rendered");
  return (
    <div className="parent">
      <ChildA />
      {children}
      {lastChild}
    </div>
  );
}

function ChildA() {
  return <div className="childA"></div>;
}

function ChildB() {
  return <div className="childB"></div>;
}

function ChildC() {
  return <div className="childC"></div>;
}

function ChildX() {
  return <div className="childX"></div>;
}