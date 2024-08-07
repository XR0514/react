import { configureStore } from "@reduxjs/toolkit"
import useReducer from "./features/userSlice"
import homeReducer from "./features/homeSlice"

// 将小仓库引入，放到大仓库里面
const store = configureStore({
  reducer: {
    user: useReducer,
    home: homeReducer
  }
})

// console.log(store)

export default store