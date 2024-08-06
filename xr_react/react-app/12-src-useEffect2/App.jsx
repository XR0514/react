/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'


// useEffect：处理组件副作用，可以实现类似生命周期的功能
// useEffect(callback, [依赖项1, 依赖项2,...])
// 依赖项改变执行 callback
// 1. 不传依赖项，组件中有任意数据更新就会执行，类似componentDidUpdate
// 2. 依赖项传入空数组，callback 只执行一次，类似componentDidMount
// 3. 依赖项数组传入具体值，监听到依赖项改变时执行 callback
// 4. callback return 的函数会在组件销毁之前执行，类似componentWillUnmount


const App = () => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    setInterval(() => {
      // 定时器中存的是App组件第一次执行时的变量 num
      // setNum(num + 1)

      // 这里的n是形参，真正的num是在调用的时候的值
      setNum(n => n + 1)

    }, 1000)

  }, [])



  return (
    <div>
      定时器：{num}
      <button onClick={() => {
        setNum(num + 1)
      }}>+</button>
    </div>
  )
}

export default App