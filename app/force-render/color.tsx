// import { useForceRender } from '@/hooks/use-force-render';
import { useState } from 'react';

function ExpensiveTree() {
  console.log("ExpensiveTree is rendered");
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
}

export function DefaultApp() {
  let [color, setColor] = useState('red');
  // useForceRender(2000);
  console.log("DefaultApp is rendered");
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}

export function DefaultApp2() {
  let [color, setColor] = useState('red');
  // useForceRender(2000);
  console.log("DefaultApp2 is rendered");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}

// solution 1

function Form() {
  let [color, setColor] = useState('red');
  return <>
    <input value={color} onChange={(e) => setColor(e.target.value)} />
    <p style={{ color }}>Hello, world!</p></>
}

export function MoveStateDown() {
  // useForceRender(2000);
  console.log("MoveStateDown is rendered");
  return (
    <div>
      <Form />
      <ExpensiveTree />
    </div>
  );
}

// solution 2

export function LiftContentUp() {
  // useForceRender(2000);
  console.log("LiftContentUp is rendered");
  return <ColorPicker>
    <p >Hello, world!</p>
    <ExpensiveTree />
  </ColorPicker>
}

function ColorPicker(props: any) {
  let [color, setColor] = useState('red');
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {props.children}
    </div>
  );
}


export default function App() {
  let [color, setColor] = useState('red');
  return <div className='flex flex-row gap-6'>
    <button className='border' style={{ color }} onClick={() => {
      setColor(color === 'red' ? 'blue' : 'red')
    }}>Set Color</button>
    <DefaultApp />
    <DefaultApp2 />
    <MoveStateDown />
    <LiftContentUp />
  </div>
}