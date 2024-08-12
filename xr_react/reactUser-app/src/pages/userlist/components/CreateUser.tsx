import React, { useEffect } from 'react'
import { Modal, Form, Input, InputNumber, Select, message } from 'antd'
import { CreateUserItem, UserListItem} from '../../../types/api'
import { createUserApi, editUserApi  } from '../../../services'

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (bol: boolean) => void;
  getUserList: () => void;
  editValue: UserListItem;
  isUpdate: string | null;
}

const CreateUser: React.FC<Props> = (props) => {

  const [form] = Form.useForm<CreateUserItem>()

  // 点击确定，并判断目前是编辑还是新增
  const handleOk = async () => {
    const value = await form.validateFields()
    // isUpdate不为空说明是编辑
    if (props.isUpdate) {
      const res = await editUserApi({
        ...value,
        id: props.editValue.id,
        no: props.editValue.no
      })
      if (res.data.code === 0) {
        message.success('编辑成功')
      }
    } else {
      const res = await createUserApi(value)
      if (res.data.code === 0) {
        message.success('创建成功！')
      } else {
        message.error(res.data.msg)
      }
    }
    props.setIsModalOpen(false)
    props.getUserList()
  }

  const handleCancel = () => {
    props.setIsModalOpen(false)
  }

  // 在编辑时，一进入组件就将获得的当前行的数据赋值给表单
  useEffect(() => {
    form.setFieldsValue({...props.editValue})
  }, [])

  return (
    <>
      <Modal
        title="新增"
        open={props.isModalOpen}
        onOk={handleOk} onCancel={handleCancel}
        cancelText='取消'
        okText='确定'
      >
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          form={form}
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
        </Form>
      </Modal>
    </>
  )
}

export default CreateUser