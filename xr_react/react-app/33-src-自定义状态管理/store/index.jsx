/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"
import { reducer, initState } from "./reducer"

export const store = createContext()

// 定义数据，提供数据
export const Provider = (props) => {

  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <store.Provider value={{state, dispatch}}>
      {/* 后代组件都能获取到value的值 */}
      {props.children}
    </store.Provider>
  )
}

// 定义一个函数，获取数据
export const useStore = () => useContext(store)

