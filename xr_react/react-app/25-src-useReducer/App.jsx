/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from 'react'

// useReducer：定义组件状态，进行复杂的数据修改时可以使用
// useReducer(reducer, initVal)
// reducer：修改和返回 state 的函数
// initVal：初始值

// reducer的返回值返回给state
const reducer = (state, action) => {
  // console.log('reducer函数', state, action)
  // state：最新的state
  // action：根据里面的type字段判断进行何种操作
  if (action.type === 'change_age') {
    return {...state, age: state.age + 1}
  } else if (action.type === 'change_name') {
    return {...state, name: action.newName}
  }
  return state
}

const initVal = {
  name: 'xm',
  age: 20,
  gender: '男',
  hobby: ['琴', '棋', '书', '画']
}

const App = () => {

  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initVal)

  console.log(state)

  return (
    <div className='box'>
      <h2>App</h2>
      <p>姓名：{state.name}</p>
      <p>年龄：{state.age}</p>
      <p>性别：{state.gender}</p>
      <p>爱好：{JSON.stringify(state.hobby)}</p>
      <button onClick={() => {
        dispatch({
          // 修改useReducer的数据需要调用dispatch时，传入一个action
          // action是一个有type字段的对象，用来描述本次如何修改state
          // 直接调取reducer函数，把action传给reducer
          type: 'change_age'
        })
      }}>年龄+</button>
      <button onClick={() => {
        dispatch({
          type: 'change_name',
          newName: Math.random()
        })
      }}>修改姓名</button>
      <hr />
      <p>count: {count}</p>
      <button onClick={() => setCount(n => n + 1)}>+</button>
    </div>
  )
}

export default App
