
// 定义初始值
export const initState = {
  count: 10,
  name: 'xm',
  age: 12
}

// 定义修改state数据的函数
export const reducer = (state, action) => {
  if (action.type === 'CHANGE_COUNT') {
    return {...state, count: state.count + action.payload}
  } else if (action.type === 'CHANGE_NAME') {
    return {...state, name: action.payload}
  }
  return state
}


