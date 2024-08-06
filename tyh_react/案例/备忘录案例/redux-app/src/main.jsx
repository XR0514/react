import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {
  // 路由根组件，所有和路由相关的内容必须在根组件内使用
  HashRouter, // hash模式
  BrowserRouter // history模式
} from 'react-router-dom'
import store from './store/index.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<div className='loading'>加载中</div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
)
