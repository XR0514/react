/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useMemo } from 'react'

// useMemo
// 作用：缓存计算结果，依赖项改变时，重新执行函数计算结果，没有改变就从缓存中读取数据
// 没写依赖项，无论谁更新，都会执行
// 依赖项为空数组，只执行一次（组件初始执行一次）


const App = () => {
  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({
    name: 'xm',
    age: 20,
    gender: '女'
  })

  const add = () => {
    setNum(num + 1)
  }

  const info = useMemo(() => {
    console.log('计算结果')
    return `我叫${obj.name}, 我今年${obj.age}`
  }, [obj.name, obj.age])

  return (
    <div>
      <p>{num}</p>
      <button onClick={add}>+</button>
      <hr />
      <button onClick={() => {
        setObj({...obj, age: obj.age + 1})
      }}>年龄+</button>
      {info}
    </div>
  )
}

export default App
