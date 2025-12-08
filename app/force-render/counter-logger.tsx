"use client"
import exp from 'constants'
import * as React from 'react'

export function Logger(props: any) {
  console.log(`${props.label} rendered`)
  return null // what is returned here is irrelevant...
}

export function Counter(props: any) {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount((c) => c + 1)
  return (
    <div>
      <button className='border' onClick={increment}>The count is {count}</button>
      {props.logger}
      <Logger label="hello" />
    </div>
  )
}

export default function App() {
  return (
    <div>
      <h1>Force Render Test</h1>
      <Counter logger={<Logger label="Counter" />} />
    </div>
  )
}