import React from 'react'
import style from './Home.module.scss'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className={style.home}>
      <main>
        <Outlet />
      </main>
      <footer>
        <NavLink to="/memo">备忘录</NavLink>
        <NavLink to="/create">新增</NavLink>
        <NavLink to="/mine">我的</NavLink>
      </footer>
    </div>
  )
}

export default Home