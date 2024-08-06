/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    // 页面渲染完成之后执行此函数
    console.log('页面渲染完成之后执行', document.querySelector('p').outerHTML)
  }, [count])

  useLayoutEffect(() => {
    // 组件编译完成后，页面渲染之前执行，可以避免页面闪烁
    console.log(document.querySelector('p').outerHTML)
  }, [count])

  return (
    <div className='box'>
      <h2>App</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount(n => n + 1)}>+</button>
    </div>
  )
}

export default App
