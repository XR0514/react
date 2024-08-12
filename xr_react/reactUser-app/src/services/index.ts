// 接口管理

// 引入类型
import type { 
  LoginParams,
  LoginResponse,
  UserInfoResponse,
  UserListResponse,
  UserListParams,
  BaseResponse,
  CreateUserItem,
  UserListItem
} from "../types/api"
import request from './request'

// 登录接口
export const loginApi = (params: LoginParams) => {
  return request.post<LoginResponse>('/api/login', params)
}

// 注册接口
export const registerApi = (params: CreateUserItem) => {
  return request.post<BaseResponse>('/api/register', params)
}

// 进入首页用户信息接口
export const userInfoApi = () => {
  return request.get<UserInfoResponse>('/api/user/info')
}

// 用户列表接口
export const userListApi = (params: UserListParams) => {
  return request.get<UserListResponse>('/api/userlist', {
    params
  })
}

// 删除接口
export const delUserApi = (id: string) => {
  return request.post<BaseResponse>('/api/user/delete', {
    id
  })
}

// 新增用户接口
export const createUserApi = (params: CreateUserItem) => {
  return request.post<BaseResponse>('/api/user/create', params)
}

// 编辑接口
export const editUserApi = (params: UserListItem) => {
  return request.post<BaseResponse>('/api/user/update', params)
}

// 导出文件接口
export const exportApi = (ids: string[]) => {
  return request.post('/api/export', { ids }, { responseType: 'blob' })
}

// 上传头像接口
export const updateAvatarApi = (avatar: string | File | Blob) => {
  const formData = new FormData()
  formData.append('avatar', avatar)
  return request.post('/api/user/avatar', formData)
}


