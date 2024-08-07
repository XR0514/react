/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { useCountDown } from '../hooks/countDown'

const Child1 = () => {
  
  const { count, start, stop, reset } = useCountDown(5400)
  

  return (
    <div className='box'>
      <h2>Child1</h2>
      <p>count：{count}</p>
      <button onClick={start}>开始</button>
      <button onClick={stop}>停止</button>
      <button onClick={reset}>重置</button>
    </div>
  )
}

export default Child1