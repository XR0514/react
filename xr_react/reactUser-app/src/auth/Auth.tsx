import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: JSX.Element
}

// 登录拦截
const Auth: React.FC<Props> = (props) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate to='/login'></Navigate>
  }

  return props.children
}

export default Auth