// 关于用户信息的小仓库
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { userInfoApi } from "../../services"
import type { UserInfo, UserInfoResponse } from "../../types/api"

// 创建异步action type为 'user/getUserInfo'
export const getUserInfo = createAsyncThunk('user/getUserInfo', async () => {
  const res = await userInfoApi()
  // return的数据会传给 fulfilled 状态的action.payload
  return res.data
})

// 定义State的类型
interface UserState {
  userInfos: UserInfo;
}

const initialState: UserState = {
  userInfos: {} as UserInfo
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  // 监听异步action 
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.fulfilled, (state, action: PayloadAction<UserInfoResponse>) => {
        state.userInfos = action.payload.values
      })
  }
})

export default userSlice.reducer
