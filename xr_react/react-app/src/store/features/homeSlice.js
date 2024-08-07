import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// 创建异步action type为 'home/bannerApi'
export const bannerApi = createAsyncThunk('home/bannerApi', async () => {
  const res = await fetch('https://zyxcl.xyz/music/api/banner').then(res => res.json())
  // return的数据会传给 fulfilled 状态的action.payload
  return res.banners
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    loading: false
  },
  // 同步修改
  reducers: {
    setBanners(state, action) {
      // action的type实际上是 'home/setBanners'
      state.banners = action.payload
    }
  },
  // 监听异步action 
  extraReducers: builder => {
    builder
      .addCase(bannerApi.pending, (state, action) => {
        console.log('正在调用接口', state, action)
        state.loading = true
      })
      .addCase(bannerApi.fulfilled, (state, action) => {
        // console.log(action)
        state.banners = action.payload
        state.loading = false
      })
  }
})

// 同步action
export const { setBanners } = homeSlice.actions
export default homeSlice.reducer
