/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// 登录拦截组件
const Auth = (props) => {

  const location = useLocation()

  const token = localStorage.getItem('token')
  if (props.isAuth) {
    if (!token) {
      return <Navigate to={`/login?redirectUrl=${encodeURIComponent(location.pathname)}`}></Navigate>
    } 
  }
  return props.children
}

export default Auth