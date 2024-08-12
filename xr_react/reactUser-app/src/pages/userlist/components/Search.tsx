import React from 'react'
import style from './Search.module.scss'
import { Button, Form, Input, Select, Space } from 'antd'
import type { SearchForm } from '../UserList'

interface Props {
  onSearch: (value: SearchForm) => void;
}

const Search: React.FC<Props> = (props) => {

  const [form] = Form.useForm()

  // 点击搜索获取表单值传给父组件
  const search = async () => {
    const value = await form.validateFields()
    const params: SearchForm = {}
    Object.keys(value).forEach(key => {
      const v = value[key as keyof SearchForm]
      if (v || typeof v === 'number') {
        params[key as keyof SearchForm] = v
      }
    })
    props.onSearch(params)
  }

  const reset = () => {
    form.resetFields()
    props.onSearch({})
  }

  return (
    <div className={style.search}>
      <Form form={form} name="horizontal_login" labelCol={{span: 6}} layout="inline">
        <Form.Item name="username" label='姓名'>
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item name="age" label='年龄'>
          <Input  placeholder="年龄" />
        </Form.Item>
        <Form.Item name="sex" label='性别'>
          <Select placeholder="请选择性别" allowClear >
            <Select.Option value={1}>男</Select.Option>
            <Select.Option value={0}>女</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="email" label='邮箱'>
          <Input placeholder="邮箱" />
        </Form.Item>
        <Form.Item name="password" label='密码'>
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit" onClick={search}>搜索</Button>
            <Button htmlType="submit" onClick={reset}>重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Search