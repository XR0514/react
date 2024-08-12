// 统一定义 useSelector 和 useDispatch 的类型
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "../store/index"

// 重新定义一个有类型的 useSelector 和 useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

