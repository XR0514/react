/* eslint-disable no-unused-vars */

import { useRoutes } from 'react-router-dom'

import routeConfig from './router/index.jsx'


// react里面的路由是以组件的形式创建的

const App = () => {
  // 版本6
  const routes = useRoutes(routeConfig)
  
  return routes
}

export default App
