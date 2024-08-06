import { configureStore } from '@reduxjs/toolkit'
import memo from './reducers/memo'

const store = configureStore({
  reducer: {
    memo
  }
})

export default store