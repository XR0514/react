/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import Child2 from './components/Child2'



const App = () => {
  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({
    name: 'xm',
    age: 20,
    gender: '女'
  })
  const child2Ref = useRef(null)


  const add = () => {
    setNum(num + 1)
  }

  return (
    <div>
      <h1>父组件</h1>
      <p>{num}</p>
      <button onClick={add}>+</button>
      {/* 传入对象的所有数据，利用扩展运算符展开
          接受时，将会是所有数据组成的对象，包括num
      */}
      <Child2
        ref={child2Ref}
        num={num}
        {...obj}
        onAdd={add}
      ></Child2>
    </div>
  )
}

export default App
