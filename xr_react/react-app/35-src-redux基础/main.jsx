/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
// 引入全局的路由根组件，所有跟路由相关的内容必须在路由根组件内使用
import {
  HashRouter,  // hash模式
  BrowserRouter  // history模式
} from 'react-router-dom'
import { Suspense } from 'react'


const root = document.getElementById('root')
// 把虚拟DOM渲染到根元素里面
ReactDOM.createRoot(root).render(
  <Suspense fallback={<div className='loading'>加载中</div>}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Suspense>
)