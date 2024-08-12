import React from 'react'
import { Form, Input, InputNumber, Select, Button, message } from 'antd'
import { CreateUserItem } from '../../../../types/api'
import { registerApi } from '../../../../services'

interface Props {
  toggle: () => void;
}

const RegisterForm: React.FC<Props> = (props) => {

    // 点击注册
    const onFinish = async (values: CreateUserItem) => {
      const res = await registerApi(values)
      if (res.data.code === 0) {
        message.success('注册成功，去登录！')
        props.toggle()
      } else {
        message.error(res.data.msg)
      }
    }

  return (
    <Form
      initialValues={{ remember: true }}
      style={{width: '400px', padding: '20px', border: '1px solid #cccccc', borderRadius: '5px'}}
      onFinish={onFinish}
    >
      <Form.Item<CreateUserItem>
        label="姓名"
        name="username"
        rules={[{ required: true, message: '请输入姓名!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<CreateUserItem>
        label="年龄"
        name="age"
        rules={[{ required: true, message: '请输入年龄!' }]}
      >
        <InputNumber min={18} max={60} style={{width: '100%'}}></InputNumber>
      </Form.Item>

      <Form.Item<CreateUserItem>
        label="性别"
        name="sex"
        rules={[{ required: true, message: '请选择性别!' }]}
      >
        <Select
          placeholder="请选择"
          allowClear
        >
          <Select.Option value={1}>男</Select.Option>
          <Select.Option value={0}>女</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item<CreateUserItem>
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<CreateUserItem>
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱!' },
          { type: 'email', message: '邮箱格式错误!' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>注册</Button>
        Or <Button type='link' onClick={props.toggle}>去登录</Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm