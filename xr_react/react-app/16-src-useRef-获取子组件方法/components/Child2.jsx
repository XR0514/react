// eslint-disable-next-line no-unused-vars
import React, { useState, forwardRef, useImperativeHandle } from 'react'



// 函数组件
const Child2 = (props, parentRef) => {
  // 第二个参数parentRef表示传入的ref对象
  const [num, setNum] = useState(0)

  console.log(props, parentRef)

  const changeNum = (n) => {
    setNum(num + n)
  }

  // 给传入的ref对象设置内容
  // 有三个参数，第一个为传入的ref对象，第二个为函数（进行给ref对象赋值），第三个为依赖项
  // 不写第三个参数，只要有变量改变，就会给ref对象赋值
  useImperativeHandle(parentRef, () => {
    // 把return的内容赋值给传入ref对象
    return {
      num,
      changeNum
    }
  }, [num])

  return (
    <div style={{border: '2px solid', padding: '20px'}}>
      <h1>Child2子组件</h1>
      {num}
      <button onClick={() => changeNum(2)}>+</button>
    </div>
  )
}

// forwardRef：转发父组件传入的ref到当前组件 的高阶组件
// 子组件通过 参数接收
export default forwardRef(Child2)