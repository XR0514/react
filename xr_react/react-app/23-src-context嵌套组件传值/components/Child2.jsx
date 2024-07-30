/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Child3 from './Child3'
import countCtx from '../context/count'
import textCtx from '../context/text'


// 子组件为函数组件
// 使用hook useContext 获取传入的数据，也可以用 Consumer
const Child2 = () => {
  const countVal = useContext(countCtx)
  const textVal = useContext(textCtx)

  console.log(countVal, textVal)

  return (
    <div className='box'>
      <h2>Child2</h2>
      <p>父组件文本：{textVal}</p>
      <p>{countVal.count}</p>
      <button onClick={() => countVal.setCount(n => n + 1)}>+</button>
      <Child3></Child3>
    </div>
  )
}

export default Child2