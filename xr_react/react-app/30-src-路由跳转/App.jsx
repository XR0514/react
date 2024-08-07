/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { 
  useRoutes, // 配置路由的hook
  NavLink, // 跳转，自动添加高亮类型
} from 'react-router-dom'

import routeConfig from './router/index.jsx'


// react里面的路由是以组件的形式创建的

const App = () => {
  // 版本6
  const routes = useRoutes(routeConfig)
  
  return (
    <div>
      <nav>
        <NavLink to='/home'>首页</NavLink>
        <NavLink to='/about'>关于</NavLink>
      </nav>
      {/* 展示路由 */}
      {routes}
    </div>
  )
}

export default App
