/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store'

const Child2 = () => {

  const {state, dispatch} = useStore()
  console.log(state)

  return (
    <div>
      <h2>Child2</h2>
      <p>{state.count}</p>
      <button onClick={() => {
        // 执行reducer函数
        dispatch({
          type: 'CHANGE_COUNT',
          payload: 2
        })
      }}>count +</button>
      <hr />
      <Link to="/about">关于我们</Link>
    </div>
  )
}

export default Child2