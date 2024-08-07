/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import store from '../store'

// getState()方法获取数据
console.log(store.getState())

const Home = () => {
  // redux与react无关联，相当于只是引入了一个变量，不能直接更新，需要通过手动创建useState更新
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    // 监听store里面的数据是否改变
    const unsubscribe = store.subscribe(() => {
      // console.log(store.getState())
      setState(store.getState())
    })
    return () => {
      // 组件关闭销毁监听
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    fetch('https://zyxcl.xyz/music/api/banner').then(res => res.json())
      .then(res => {
        console.log(res.banners)
        store.dispatch({
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
        store.dispatch({
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