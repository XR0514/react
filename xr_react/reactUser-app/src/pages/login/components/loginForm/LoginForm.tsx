import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import { loginApi } from '../../../../services'
import { useNavigate } from 'react-router-dom'

interface Props {
  toggle: () => void
}

// 获取表单数据的类型
interface FormValue {
  username: string;
  password: string;
}

const LoginForm: React.FC<Props> = (props) => {

  const navigate = useNavigate()
  // 是否加载，防抖
  const [loading, setLoading] = useState(false)

  // 点击登录
  const onFinish = async (values: FormValue) => {
    // 点击登录，加载中开启
    setLoading(true)
    try {
      const res = await loginApi(values)
      // 调接口完毕，加载中关闭
      setLoading(false)
      if (res.data.code === 0) {
        // 提示成功
        message.success(res.data.msg)
        // 存token
        localStorage.setItem('token', res.data.token)
        // 跳转
        navigate('/')
      } else {
        message.error(res.data.msg)
      }
    } catch (e) {
      message.error('网络错误，请稍后重试！')
    }
  }

  return (
    <Form
      initialValues={{ remember: true }}
      style={{width: '400px', padding: '20px', border: '1px solid #cccccc', borderRadius: '5px'}}
      onFinish={onFinish}
    >
      <Form.Item<FormValue>
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item<FormValue>
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>登录</Button>
        Or <Button type='link' onClick={props.toggle}>去注册</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm