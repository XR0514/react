import React, { useMemo, useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

const { Sider } = Layout

interface MenuItemType {
  label: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  children?: Array<{
    label: React.ReactNode;
    key: string;
  }>
}

const items: MenuItemType[] = [
  {
    label: '用户管理',
    key: '/userlist',
    icon: <UserOutlined />,
    children: [
      {
        label: <Link to='/userlist'>用户列表</Link>,
        key: '1'
      }
    ]
  },
  {
    label: '系统管理',
    key: '/setting',
    icon: <SettingOutlined />,
    children: [
      {
        label: <Link to='/setting'>用户设置</Link>,
        key: '2'
      }
    ]
  }
]

const Aside: React.FC = () => {

  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  // 根据当前pathname找到初始选中的菜单项
  const defaultSelectedKeys = useMemo(() => {
    const keys: string[] = []
    items.forEach(item => {
      if (item?.key === location.pathname && item.children) {
        keys.push(item.children[0].key)
      }
    })
    return keys
  }, [])

  return (
    <Sider width="15%" style={{background: '#ffffff'}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu
        style={{height: '100%', borderRight: '2px solid #ccc'}}
        theme="light"
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={[location.pathname]}
        mode="inline"
        items={items}
      />
    </Sider>
  )
}

export default Aside