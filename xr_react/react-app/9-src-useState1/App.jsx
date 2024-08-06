/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// 名字以 use 开头的都算hook，可以自定义
// hook使用规则：
//  1. 只能在函数组件的最顶层使用，不能在if、for、子函数中使用
//  2. 只能在函数组件和自定义hook中使用，不能再class组件和普通函数中使用



// 函数组件
// 函数组件在 react v16.8 之前不能定义状态
// 在 v16.8 新增了hooks，解决函数组件的状态问题，可以完全代替 类组件 的功能
const App = () => {
  // 数组内第一个是数据，第二个是修改数据的函数
  // 用useState定义的数据，每更新一次，组件也会更新一次
  const [ count, setCount ] = useState(10)
  const [ title, setTitle ] = useState('标题')
  const [ obj, setObj ] = useState({name: 'xm', age: 12})
  const [ arr, setArr ] = useState([1,2,3,4,5,6])

  const add = () => {
    // setArr([...arr, Math.random()])
    const newArr = [...arr]
    newArr.push(Math.random())
    setArr(newArr)
  }

  return (
    <div>
      <h1>{title}</h1>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => setCount(count - 1)}>-</button>
      { count }
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      <button onClick={add}>添加</button>
      <ul>
        {arr.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <hr />
      <button onClick={() => {
        // 对象深，先拷贝再修改，再覆盖
        setObj({...obj, age: obj.age + 1})
      }}>age+</button>
      <p>{JSON.stringify(obj)}</p>
    </div>
  )
}

export default App