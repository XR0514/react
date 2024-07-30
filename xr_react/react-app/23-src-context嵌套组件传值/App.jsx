/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Provider } from './context/count'
import Child1 from './components/Child1'


const App = () => {
  const [count, setCount] = useState(0)

  const ctxContent = {
    count,
    setCount
  }

  return (
    // value里面是一个对象，提供数据给所有后代组件
    <Provider value={ctxContent}>
      <div className='box'>
        <h1>App_{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <Child1></Child1>
      </div>
    </Provider>
  )
}

export default App
