import React from 'react'

interface Props {
  count: number;
  name: string;
  onAdd: (n: number) => void;
}

// 函数子组件
const Child: React.FC<Props> = (props) => {
  return (
    <div className='box'>
      <h2>Child</h2>
      <p>父组件count：{props.count}</p>
      <button onClick={() => props.onAdd(1)}>count +</button>
      <p>父组件name：{props.name}</p>
    </div>
  )
}

export default Child