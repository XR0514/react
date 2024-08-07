/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { 
  Route,  // 配置路由组件
  Routes,  // 路由的外层组件
  Navigate, // 重定向组件
  Link, // 跳转，没有高亮类型
  NavLink, // 跳转，自动添加高亮类型
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

// react里面的路由是以组件的形式创建的

const App = () => {
  
  return (
    <div>
      <nav>
        <NavLink to='/home'>首页</NavLink>
        <NavLink to='/about'>关于</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<div>404</div>}></Route>
      </Routes>
    </div>
  )
}

export default App
