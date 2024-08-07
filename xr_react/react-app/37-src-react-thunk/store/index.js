import { createStore, applyMiddleware } from "redux"
// logger：中间件，调用 dispatch 时自动打印
import logger from 'redux-logger'
// thunk：中间件：让 dispatch 可以接收函数作为参数
import { thunk } from 'redux-thunk'

const initState = {
  name: 'xm',
  age: 20,
  banners: []
}

// 修改数据的方法，返回最新的state
// 进入页面默认走一次
// 里面只能是同步
const reducer = (state, action) => {
  // state：最新的state
  // action：描述本次如何修改的对象
  // console.log(state, action)
  if (action.type === 'CHANGE_AGE') {
    return {...state, age: state.age + action.payload}
  } else if (action.type === 'SET_BANNER') {
    return {...state, banners: action.payload}
  }
  return state
}

// 创建store，接收一个修改数据的方法和数据初始值
// applyMiddleware：添加中间件
// 中间件：增强 dispatch，给 dispatch 添加额外的功能
const store = createStore(reducer, initState, applyMiddleware(logger, thunk))


// 抛出store
export default store
