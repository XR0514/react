import React from 'react'
import style from './Header.module.scss'
import { useAppSelector } from '../../hooks/store'
import { Space, Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { DownOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: '个人设置',
    key: '1',
    icon: <SettingOutlined />,
  },
  {
    label: '退出登录',
    key: '2',
    icon: <PoweroffOutlined />,
  }
]

const Header: React.FC = () => {

  const userInfo = useAppSelector(state => state.user.userInfos)
  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '1') {
      navigate('/setting')
    } else {
      localStorage.removeItem('token')
      navigate('/login')
    }
  }

  console.log(userInfo)

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img height={40} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
      </div>
      <Space>
        <Avatar size={40} src={userInfo.avator}></Avatar>
        <Dropdown menu={{ items, onClick }}>
          <Space>
            {userInfo.username}
            <DownOutlined />
          </Space>
        </Dropdown>
      </Space>
    </div>
  )
}

export default Header