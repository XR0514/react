/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

// 高阶组件：参数为组件，返回值为新组件的函数
// 作用：抽取组件公用逻辑

const App = () => {

  const [text, setText] = useState('父组件文字标题')

  return (
    <div>
      <h2>App</h2>
      <Child1 text={text}></Child1>
      <Child2></Child2>
    </div>
  )
}

export default App
