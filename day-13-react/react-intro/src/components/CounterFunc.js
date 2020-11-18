import React, {useState} from 'react'

export default function CounterFunc() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter == 0) return
    setCounter(counter - 1)
  }

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h2 style={{margin: "0 10px", display:"inline"}}>{counter}</h2>
      <button onClick={increment}>+</button>
    </div>
  )
}
