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
import Child1 from './pages/Child1'
import Child2 from './pages/Child2'
import Child3 from './pages/Child3'

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
        <Route path='/home' element={<Home></Home>}>
        {/* 子路由 */}
          <Route path='/home/child1' element={<Child1></Child1>}></Route>
          <Route path='/home/child2' element={<Child2></Child2>}></Route>
          <Route path='/home/child3' element={<Child3></Child3>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<div>404</div>}></Route>
      </Routes>
    </div>
  )
}

export default App
