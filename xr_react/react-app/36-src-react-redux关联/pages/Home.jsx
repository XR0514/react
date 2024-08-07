/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// 函数组件提供的hook
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  // 获取方法
  const dispatch = useDispatch()
  // 获取数据
  const state = useSelector(state => state)

  useEffect(() => {
    fetch('https://zyxcl.xyz/music/api/banner').then(res => res.json())
      .then(res => {
        // console.log(res.banners)
        dispatch({
          type: 'SET_BANNER',
          payload: res.banners
        })
      })
  }, [])


  return (
    <div>
      <h1>Home</h1>
      <p>姓名：{state.name}</p>
      <p>年龄：{state.age}</p>
      <button onClick={() => {
        // 通过dispatch 触发 reducer 函数修改state
        dispatch({
          type: 'CHANGE_AGE',
          payload: 1
        })
      }}>age +</button>
      <hr />
      <ul>
        {state.banners.map(item => 
          <li key={item.targetId}>
            <img src={item.imageUrl} width={300} alt="" />
          </li>
        )}
      </ul>
    </div>
  )
}

export default Home