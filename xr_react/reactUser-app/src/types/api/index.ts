// 统一管理接口类型

// 返回公共数据类型
export interface BaseResponse {
  code: number;
  msg: string;
}

// 针对公共返回用户信息类型，只是不确定values的类型，可以写一个泛型类型
interface BaseValues<T> {
  code: number;
  msg: string;
  values: T
}

// 使用Record泛型定义 登录参数类型
export type LoginParams = Record<'username' | 'password', string>

// 登录接口返回值类型
export type LoginResponse = BaseResponse & {
  token: string;
}

// 进入首页用户信息
export type UserInfo = {
  avator: string;
  id: string;
  no: number;
  username: string;
}

// 进入首页返回用户信息类型
export type UserInfoResponse = BaseValues<UserInfo>

// 用户列表参数类型
export type UserListParams = {
  page: number;
  pagesize: number;
}

// 返回用户列表类型
export type UserListItem = {
  age: number;
  email: string;
  id: string;
  no: number;
  password: string;
  sex: 0 | 1;
  username: string;
}

// 返回返回用户列表总信息
export type UserListResponse = BaseValues<{
  list: UserListItem[];
  total: number;
}>

// 新增用户信息
export type CreateUserItem = Omit<UserListItem, 'id' | 'no'>