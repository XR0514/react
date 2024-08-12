import { configureStore } from "@reduxjs/toolkit"
import userReducer from './modals/user'

// 创建store
const store = configureStore({
  reducer: {
    // 将小仓库引入大仓库中
    user: userReducer
  }
})

// 从 store 本身推出 RootState 和 AppDispatch 类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store