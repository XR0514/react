import { useState, useRef, useEffect } from "react"

export const useCountDown = (n) => {
  const [count, setCount] = useState(n)
  const timer = useRef(null)
  
  const start = () => {
    timer.current = setInterval(() => {
      setCount(n => n - 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(timer.current)
  }

  useEffect(() => {
    if (count === 0) {
      clearInterval(timer.current)
    }
  }, [count])

  useEffect(() => {
    return () => {
      stop()
    }
  }, [])

  return {
    count,
    stop,
    start
  }
}