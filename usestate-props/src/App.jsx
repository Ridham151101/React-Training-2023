import { useState } from 'react'
import './App.css'
import Prop from './Prop.jsx'

function App() {
  const [count, setCount] = useState(initialvalue)

  function initialvalue() {
    return 0;
  }

  const increment = () => {
    return setCount((count) => count + 1)
  }

  const decrement = () => {
    if (count > 0)
      return setCount((count) => count - 1)
    else
      return 0
  }

  return (
    <>
      <div className="card">
        <button className='button' onClick={increment}>+</button>
        <Prop count = {count} />
        <button className='button' onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App
