import { useState } from 'react'
import { Test } from 'Test'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Test />
    </div>
  )
}

export default App
