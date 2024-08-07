/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Login = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => {
        localStorage.setItem('token', 'token111')
        const redirectUrl = searchParams.get('redirectUrl') || '/'
        navigate(redirectUrl)
      }}>登录</button>
    </div>
  )
}

export default Login