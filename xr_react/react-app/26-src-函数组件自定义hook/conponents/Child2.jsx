/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import { useCountDown } from '../hooks/countDown'
import { useUnmount } from '../hooks/onUnmount'

const Child2 = () => {

  const { count, start } = useCountDown(5400)

  useEffect(() => {
    start()
  }, [])

  useUnmount(() => {
    console.log('Child2组件销毁')
  })

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
    <div className='box'>
      <h2>Child2</h2>
      <p>限时秒杀：{formatDate(count)}</p>
    </div>
  )
}

export default Child2