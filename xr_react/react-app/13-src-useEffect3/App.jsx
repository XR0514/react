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
    console.log('num 改变了')

    // 有依赖项更新时，先清一次副作用，先执行一次return，再更新
    return () => {
      console.log('组件销毁', num)
    }

  }, [num])


  useEffect(() => {

    return () => {
      // 只在组件销毁时执行
    }
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