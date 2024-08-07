import { createSlice } from "@reduxjs/toolkit"

// 创建小仓库
const userSlice = createSlice({
  // 仓库名
  name: 'user',
  // 初始数据
  initialState: {
    name: 'xm',
    age: 20
  },
  // 修改数据的方法
  reducers: {
    addAge(state, action) {
      state.age += action.payload
    },
    changeName(state, action) {
      state.name = action.payload
    }
  }
})

// console.log('userSlice', userSlice)

export const { addAge, changeName } = userSlice.actions
// 默认生成一个reducer函数，抛出
export default userSlice.reducer

