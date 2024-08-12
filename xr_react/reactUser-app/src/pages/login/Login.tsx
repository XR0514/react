import React, { useState }  from 'react'
import style from './Login.module.scss'
import LoginForm from './components/loginForm/LoginForm'
import RegisterForm from './components/registerForm/RegisterForm'

const Login: React.FC = () => {

  const [isLogin, setIsLogin] = useState(true)

  const toggle = () => setIsLogin(!isLogin)

  return (
    <div className={style.login}>
      {
        isLogin
          ?
        <LoginForm toggle={toggle}></LoginForm>
          : 
        <RegisterForm toggle={toggle}></RegisterForm>
      }
    </div>
  )
}

export default Login