/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Child = () => {
  const [title, setTitle] = useState('child子组件')



  console.log('child子组件渲染了')

  return (
    <div style={{border: '2px solid #ccc', padding: '20px'}}>
      <h2>{title}</h2>
      <button onClick={() => setTitle(Math.random())}>改标题</button>
    </div>
  )
}

// React.memo: 高阶组件，性能优化，减少不必要的渲染
export default React.memo(Child)