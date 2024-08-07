/* eslint-disable no-unused-vars */

import { 
  Navigate, // 重定向组件
} from 'react-router-dom'
// 懒加载React.lazy 或者 直接lazy
import react, { lazy } from 'react'

import Home from '../pages/Home'
import About from '../pages/About'
import Child1 from '../pages/Child1'
// import Child2 from '../pages/Child2'
import Child3 from '../pages/Child3'
import Details from '../pages/Details'

// 异步组件，组件懒加载，必须配合 Suspense 组件使用，lazy引入的组件必须是 Suspense 的后代组件
const Child2 = lazy(() => import('../pages/Child2'))
// const Child3 = lazy(() => import('../pages/Child3'))


export default [
  {
    path: '/',
    element: <Navigate to='/home'></Navigate>
  },
  {
    path: '/home',
    element: <Home></Home>,
    children: [
      {
        path: '/home',
        element: <Navigate to='/home/child1'></Navigate>
      },
      {
        path: '/home/child1',
        element: <Child1></Child1>
      },
      {
        path: '/home/child2',
        element: <Child2></Child2>
      },
      {
        path: '/home/child3',
        element: <Child3></Child3>
      }
    ]
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    // 动态路由
    path: '/detail/:id',
    element: <Details></Details>
  },
  {
    path: '*',
    element: <div>404</div>
  }
]