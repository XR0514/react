/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import style from './LayOut.module.scss'
import { Flex, Layout } from 'antd'
import { useAppDispatch } from '../hooks/store'
import { getUserInfo } from '../store/modals/user'
import Header from '../components/header/Header'
import Aside from '../components/aside/Aside'

const { Content } = Layout

// 定义props的类型
interface Props {
  children: JSX.Element
}

// 嵌套在路由外面的一层，让setting和userlist也以路由的形式展示
const LayOut: React.FC<Props> = (props) => {
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <Flex gap="middle" wrap style={{height: '100%'}}>
      <Layout className={style.layout}>
        <Header></Header>
        <Layout>
          <Aside></Aside>
          <Content className={style.content}>{props.children}</Content>
        </Layout>
      </Layout>
    </Flex>
  )
}

export default LayOut
