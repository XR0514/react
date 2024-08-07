import { useState, useRef, useEffect } from "react"

// 自定义hook必须以 use 开头
export const useCountDown = (n) => {
  const [count, setCount] = useState(n)
  const timer = useRef(null)
  
  const start = () => {
    // 异步函数，每次更新，组件刷新，num值为10，但定时器里面异步没走
    // 如果直接setCount(num - 1)，会一直是10
    timer.current = setInterval(() => {
      setCount(n => n - 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(timer.current)
  }

  const reset = () => {
    setCount(n)
    clearInterval(timer.current)
  }

  useEffect(() => {
    if (count === 0) {
      clearInterval(timer.current)
    }
  }, [count])

  // 组件销毁时清除副作用
  useEffect(() => {
    return () => {
      stop()
    }
  }, [])

  // 外面想使用变量，需要抛出
  return {
    count,
    stop,
    start,
    reset
  }
}