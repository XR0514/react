import React, { useEffect, useState } from 'react'
import style from './UserList.module.scss'
import { userListApi, delUserApi } from '../../services'
import { UserListItem } from '../../types/api'
import { Button, Space, Table, Tag, Modal, message } from 'antd'
import type { TableProps } from 'antd'
import { sexText } from './constants'
import CreateUser from './components/CreateUser'
import Search from './components/Search'
import { CreateUserItem } from '../../types/api'

export type SearchForm = Partial<CreateUserItem>

const UserList: React.FC = () => {

  const [list, setList] = useState<UserListItem[]>([])
  const [total, setTotal] = useState(0)
  const [params, setParams] = useState({page: 1, pagesize: 5})
  const [isModalOpen, setIsModalOpen] = useState(false)
  // 存储获取到的当前列表数据
  const [editValue, setEditValue] = useState<UserListItem>({} as UserListItem)
  // 判断是编辑还是新增
  const [isUpdate, setIsUpdata] = useState<string | null>(null)
  // 存储搜索框数据
  const [searchForm, setSearchFrom] = useState<SearchForm>({})

  const columns: TableProps<UserListItem>['columns'] = [
    {
      title: '序号',
      dataIndex: 'no',
      key: 'no',
      align: 'center',
      fixed: 'left'
    },
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      fixed: 'left'
    },
    {
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
      align: 'center'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align: 'center'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      align: 'center',
      render: (_, record) => {
        return <Tag color={sexText[record.sex]?.color}>{sexText[record.sex]?.val}</Tag>
      }
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      align: 'center'
    },
    {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      align: 'center'
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <Space size="middle">
          <Button type='primary' onClick={() => edit(record)}>编辑</Button>
          <Button danger onClick={() => del(record)}>删除</Button>
        </Space>
      ),
    },
  ]

  const getUserList = async () => {
    const res = await userListApi({
      ...params,
      ...searchForm
    })
    // console.log(res.data.values.list)
    setList(res.data.values.list)
    setTotal(res.data.values.total)
  }

  useEffect(() => {
    getUserList()
  }, [params, searchForm])

  const showTotal = (total: number, range: number[]) => {
    return (
      <Space>
        <span>总共 {total} 条</span>
        <span>当前{range[0]} - {range[1]}</span>
      </Space>
    )
  }

  // 页码或每页条数改变
  const onChange = (page: number, pageSize: number) => {
    // console.log(page, pageSize)
    setParams({
      page: page,
      pagesize: pageSize
    })
    getUserList()
  }

  // 删除
  const del = async (record: UserListItem) => {
    Modal.confirm({
      title: '警告',
      okText: '确定',
      cancelText: '取消',
      content: <div>确定要删除<span style={{color: 'red', fontWeight: '700'}}> {record.username} </span>吗？</div>,
      onOk: async () => {
        try {
          const res = await delUserApi(record.id)
          if (res.data.code === 0) {
            message.success(res.data.msg)
            // 判断当前删除项是否时最后一页的剩下的最后一项
            if (list.length === 1 && params.page === Math.ceil(total / params.pagesize)) {
              setParams({
                ...params,
                page: params.page - 1
              })
            } else {
              getUserList()
            }
          } else {
            message.error(res.data.msg)
          }
        } catch (e) {
          console.log(e)
        }
      }
    })
  }

  // 新增
  const add = () => {
    setEditValue({} as UserListItem)
    setIsUpdata(null)
    setIsModalOpen(true)
  }

  // 编辑
  const edit = (record: UserListItem) => {
    setIsModalOpen(true)
    setEditValue(record)
    setIsUpdata(record.id)
  }

  // 搜索
  const onSearch = (value: SearchForm) => {
    console.log('要搜索的内容', value)
    setSearchFrom(value)
  }

  // 导出函数
  const exportFn = () => {
    
  }

  return (
    <div className={style.page}>
      <Search onSearch={onSearch}></Search>
      <Space>
        <Button type="primary" onClick={add}>新增</Button>
        <Button onClick={exportFn}>导出</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={list}
        rowKey="id"
        scroll={{x: 1300}}
        pagination={{ 
          pageSize: params.pagesize,
          current: params.page,
          pageSizeOptions: [5, 10, 15, 20],
          total,
          showQuickJumper: true,
          showTotal: (total, range) => showTotal(total, range),
          onChange: (page, pageSize) => onChange(page, pageSize)
         }}
      />
      {
        isModalOpen
          && 
        <CreateUser
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          getUserList={getUserList}
          editValue={editValue}
          isUpdate={isUpdate}
        ></CreateUser>}
    </div>
  )
}

export default UserList