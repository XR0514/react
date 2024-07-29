/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import Child from './components/Child'
import Child2 from './components/Child2'


// useRef：
// 1. 获取dom元素
// 2. 存和组件渲染无关的数据(例如定时器)，useRef创建的对象地址会在组件的生命周期中保持不变，修改ref变量也不会触发组件更新
// 3. 获取子组件的数据和方法(类组件和函数组件)
//    函数组件：先在父组件定义ref对象（在子组件标签上）
//              再利用 forwardRef 在子组件中转发父组件传过去的ref对象
//              在子组件利用参数接收
//              利用 useImperativeHandle 给传入的ref对象设置内容（将子组件的数据和方法通过return赋值给ref对象）


const App = () => {
  // const childRef = useRef(null)
  // 这里的值，在子组件用参数接收
  const child2Ref = useRef(123)


  return (
    <div>
      <h1>父组件</h1>
      <button onClick={() => {
        // // 类组件获取的是实例对象this
        // console.log('类组件', childRef.current)
        // 函数组件没有this，返回null
        console.log('函数组件', child2Ref.current)
        // 调用子组件的方法
        // childRef.current.add(5)
        child2Ref.current.changeNum(4)
      }}>获取子组件</button>
      {/* <Child ref={childRef}></Child> */}
      <Child2 ref={child2Ref}></Child2>
    </div>
  )
}

export default App
