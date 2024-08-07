/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useForceUpdate } from '../hooks/useForceUpdate'

const Child3 = () => {

  // 不更新
  const num = useRef(1)

  const forceUpdate = useForceUpdate()

  return (
    <div>
      <h2>Child3</h2>
      <p>num：{num.current}</p>
      <button onClick={() => {
        num.current++
        console.log(num.current)
        // 强制更新，点击执行forceUpdate()，里面执行了useState里面的修改数据的方法，然后就会更新组件
        forceUpdate()
      }}>+</button>
    </div>
  )
}

export default Child3