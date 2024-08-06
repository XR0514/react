/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Child = (props) => {
  const [title, setTitle] = useState('child子组件')



  console.log('child子组件渲染了')

  return (
    <div style={{border: '2px solid #ccc', padding: '20px'}}>
      <h2>{title}</h2>
      <button onClick={() => setTitle(Math.random())}>改标题</button>
      <hr />
      <p>App的num：{props.num}</p>
      <button onClick={() => props.add()}>修改父组件的num</button>
    </div>
  )
}

// React.memo: 高阶组件，性能优化，减少不必要的渲染
// 浅比较更新前的props和更新后的props是否有更新，有就重新渲染，没有就不会渲染子组件
// 传第二个函数参数可以进行深度，手动比较
export default React.memo(Child)
//   (prevProps, props) => {
//   if (prevProps.xm.info.a.b !== props.xm.info.a.b) {
//     // 返回false表示不缓存，需要更新
//     return false
//   }
//   // 返回true表示要缓存，不需要更新
//   return true
// })