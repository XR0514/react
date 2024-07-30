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

  // 子组件使用了React.memo，父组件给子组件传函数，如果是普通函数会失效
  // 这个时候将函数用useCallback包裹，避免函数重新创建，props更新后进行不必要的渲染
  const add = useCallback(() => {
    setNum(num + 1)
  }, [num])

  return (
    <div>
      <p>num：{num}</p>
      <button onClick={add}>+</button>
      <hr />
      <p>age：{obj.age}</p>
      <button onClick={() => setObj({...obj, age: obj.age + 1})}>age+</button>
      <hr />
      <Child num={num} add={add} xm={{name: 'xm', info: {a: {b: 100}}}}></Child>
    </div>
  )
}

export default App
