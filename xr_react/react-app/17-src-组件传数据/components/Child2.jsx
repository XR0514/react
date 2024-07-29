// eslint-disable-next-line no-unused-vars
import React, { useState, forwardRef, useImperativeHandle } from 'react'



// 函数组件
const Child2 = (props, parentRef) => {
  // 第一个参数props接收父组件传过来的数据
  // 第二个参数parentRef表示传入的ref对象
  console.log(props, parentRef)


  return (
    <div style={{border: '2px solid', padding: '20px'}}>
      <h1>Child2子组件</h1>

      <hr />
      <p>父组件的num：{props.num}</p>
      <button onClick={props.onAdd}>引用父组件的add函数</button>
    </div>
  )
}

// forwardRef：转发父组件传入的ref到当前组件 的高阶组件
// 子组件通过 参数接收
export default forwardRef(Child2)