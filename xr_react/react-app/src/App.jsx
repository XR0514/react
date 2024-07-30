/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from 'react'

// useReducer：定义组件状态

const App = () => {

  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer()


  return (
    <div className='box'>
      <h2>App</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount(n => n + 1)}>+</button>
    </div>
  )
}

export default App
