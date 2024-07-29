/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Child from './components/Child'

const App = () => {
  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({
    name: 'xm',
    age: 20,
    gender: '女'
  })

  const add = useCallback(() => {
    setNum(num + 1)
  }, [num])

  return (
    <div>
      <p>{num}</p>
      <button onClick={add}>+</button>
      <hr />
      <p>age：{obj.age}</p>
      <button onClick={() => setObj({...obj, age: obj.age + 1})}>age+</button>
      <hr />
      <Child></Child>
    </div>
  )
}

export default App
