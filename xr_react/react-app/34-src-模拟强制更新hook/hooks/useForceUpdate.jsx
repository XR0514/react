/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react"

// 模拟强制更新函数
export const useForceUpdate = () => {
  // const [num, setNum] = useState(50)
  // return () => setNum(num + 1)
  const [, dispatch] = useReducer(() => Math.random())
  return dispatch
}