/* eslint-disable no-unused-vars */
import React, { useState, Suspense } from 'react'
import { useStore } from '../store'

const Child3 = () => {

  const {state, dispatch} = useStore()

  return (
    <div>
      <h2>Child3</h2>
      <input type="text" value={state.name} onChange={e => {
        dispatch({
          type: 'CHANGE_NAME',
          payload: e.target.value
        })
      }} />
      <p>姓名：{state.name}</p>
      <p>年龄：{state.age}</p>
      <p>count: {state.count}</p>
    </div>
  )
}

export default Child3