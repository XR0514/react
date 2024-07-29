/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// 名字以 use 开头的都算hook，可以自定义
// hook使用规则：
//  1. 只能在函数组件的最顶层使用，不能在if、for、子函数中使用
//  2. 只能在函数组件和自定义hook中使用，不能再class组件和普通函数中使用



// 函数组件
// 函数组件在 react v16.8 之前不能定义状态
// 在 v16.8 新增了hooks，解决函数组件的状态问题，可以完全代替 类组件 的功能
const App = () => {
  // 数组内第一个是数据，第二个是修改数据的函数
  const [ count, setCount ] = useState(10)


  const add = () => {
    // 异步，合并渲染一次
    setCount(prev => {
      console.log(prev)
      return prev + 1
    })
    setCount(prev => {
      console.log(prev)
      return prev + 1
    })
    setCount(prev => {
      console.log(prev)
      return prev + 1
    })
  }

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      { count }
      <button onClick={add}>+</button>

    </div>
  )
}

export default App