/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Child1 from './conponents/Child1'
import Child2 from './conponents/Child2'

// 自定义hook：抽取组件中的公用逻辑

const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <h2>App</h2>
      <button onClick={() => setShow(!show)}>展示组件</button>
      {show && <Child1></Child1>}
      {show && <Child2></Child2>}
    </div>
  )
}

export default App
