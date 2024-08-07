/* eslint-disable no-unused-vars */
import React from 'react'
// Outlet: 类似于 vue的 RouterView，展示路由组件
import { Outlet, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h3>头部区域</h3>
      <nav>
        <NavLink to='/home/child1'>Child1</NavLink>
        <NavLink to='/home/child2'>Child2</NavLink>
        <NavLink to='/home/child3'>Child3</NavLink>
      </nav>
      <div className='content'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Home