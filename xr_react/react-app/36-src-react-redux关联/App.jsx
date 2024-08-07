/* eslint-disable no-unused-vars */
import { Navigate, NavLink, useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  // 版本6
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to='/home'></Navigate>
    },
    {
      path: '/home',
      element: <Home></Home>
    },
    {
      path: '/about',
      element: <About></About>
    }
  ])

  return (
    <div>
      <nav>
        <NavLink to='/home'>首页</NavLink>
        <NavLink to='/about'>关于我们</NavLink>
      </nav>
      <div>{routes}</div>
    </div>
  )
}

export default App
