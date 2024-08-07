/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// 函数组件提供的hook，关联redux和组件
import { useDispatch, useSelector } from 'react-redux'
// 统一管理的action，thunk中间件让dispatch能够接收一个函数参数
import { setBannerAction, setAgeAction } from '../actions'

const Home = () => {
  // 获取方法
  const dispatch = useDispatch()
  // 获取数据
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(setBannerAction)
  }, [])


  return (
    <div>
      <h1>Home</h1>
      <p>姓名：{state.name}</p>
      <p>年龄：{state.age}</p>
      <button onClick={() => {
        // 通过dispatch 触发 reducer 函数修改state
        dispatch(setAgeAction(1))
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