/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useContext } from 'react'
import style from './CountDown.module.scss'
import { useCountDown } from '../../../hook/countDown'
import ctx from '../../../context'

const CountDown = () => {
  const ctxVal = useContext(ctx)

  const formatDate = (num) => {
    const h = zero(parseInt(num / 3600))
    const m = zero(parseInt(num % 3600 / 60))
    const s = zero(parseInt(num % 60))
    return `${h} : ${m} : ${s}`
  }

  const zero = (num) => {
    return num < 10 ? '0' + num : num
  }

  return (
    <div className={style.time}>{formatDate(ctxVal.count)}</div>
  )
}

export default CountDown