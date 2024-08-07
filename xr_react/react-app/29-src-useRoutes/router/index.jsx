
import { 
  Navigate, // 重定向组件
} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Child1 from '../pages/Child1'
import Child2 from '../pages/Child2'
import Child3 from '../pages/Child3'


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
    path: '*',
    element: <div>404</div>
  }
]