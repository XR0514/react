/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'

// useCallback
// 作用：缓存函数，只有依赖项改变重新创建函数

const arr = []

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

  // 使用useMemo实现useCallback的功能
  // const add = useMemo(() => {
  //   return () => {
  //     setNum(num + 1)
  //   }
  // }, [num])

  if (!arr.includes(add)) {
    arr.push(add)
  }

  console.log(arr)

  return (
    <div>
      <p>{num}</p>
      <button onClick={add}>+</button>
      <hr />
      <p>age：{obj.age}</p>
      <button onClick={() => setObj({...obj, age: obj.age + 1})}>age+</button>
    </div>
  )
}

export default App
