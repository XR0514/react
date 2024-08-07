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
import Login from '../pages/Login'
import Auth from '../hoc/Auth'

// 异步组件，组件懒加载，必须配合 Suspense 组件使用，lazy引入的组件必须是 Suspense 的后代组件
const Child2 = lazy(() => import('../pages/Child2'))
// const Child3 = lazy(() => import('../pages/Child3'))


const routes = [
  {
    path: '/',
    element: <Navigate to='/home'></Navigate>
  },
  {
    path: '/home',
    isAuth: true,
    element: <Home></Home>,
    title: '首页',
    children: [
      {
        path: '/home',
        title: 'child1',
        element: <Navigate to='/home/child1'></Navigate>
      },
      {
        path: '/home/child1',
        title: 'child1',
        element: <Child1></Child1>
      },
      {
        path: '/home/child2',
        title: 'child2',
        element: <Child2></Child2>
      },
      {
        path: '/home/child3',
        title: 'child3',
        element: <Child3></Child3>
      }
    ]
  },
  {
    path: '/about',
    isAuth: true,
    title: '关于我们',
    element: <About></About>
  },
  {
    // 动态路由
    path: '/detail/:id',
    title: '详情',
    element: <Details></Details>
  },
  {
    path: '/login',
    title: '登录',
    element: <Login></Login>
  },
  {
    path: '*',
    title: '404',
    element: <div>404</div>
  }
]

const RouteRender = (props) => {
  document.title = props.title
  return props.children
}

// 递归遍历
const formatRoutes = (routes) => {
  if (!Array.isArray(routes)) return []
  return routes.map(item => {
    return {
      ...item,
      element: (
        <RouteRender title={item.title}>
          <Auth isAuth={item.isAuth}>
            {item.element}
          </Auth>
        </RouteRender>
      ),
      children: formatRoutes(item.children)
    }
  })
}

// const routeConfig = routes.map(item => {
//   return {
//     ...item,
//     element: (
//       <RouteRender title={item.title}>
//         <Auth isAuth={item.isAuth}>
//           {item.element}
//         </Auth>
//       </RouteRender>
//     )
//   }
// })

export default formatRoutes(routes)
