import { useEffect } from "react"

export const useUnmount = (callBack) => {
  useEffect(() => {
    return () => {
      callBack && callBack()
    }
  }, [])
}