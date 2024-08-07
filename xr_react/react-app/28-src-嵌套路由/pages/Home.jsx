/* eslint-disable no-unused-vars */
import React from 'react'
// Outlet: 类似于 vue的 RouterView，展示路由组件
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h3>头部区域</h3>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Home