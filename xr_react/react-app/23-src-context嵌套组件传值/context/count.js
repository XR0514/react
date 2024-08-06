/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext } from 'react'

// 创建一个上下文对象，里面有两个组件表示提供和接收
const ctx = React.createContext()
export const Provider = ctx.Provider
export const Consumer = ctx.Consumer

export default ctx