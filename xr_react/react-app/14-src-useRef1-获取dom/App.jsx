/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'


const App = () => {
  const [num, setNum] = useState(0)
  const domRef = useRef()
  const inpRef = useRef()

  useEffect(() => {
    console.log(domRef.current)
  })


  return (
    <div>
      <p ref={domRef}>{ num }</p>
      <button onClick={() => setNum(num + 1)}>+</button>

      <hr />
      <input type="text" ref={inpRef} />
      <button onClick={() => {
        console.log(inpRef.current.value)
      }}>获取input的值</button>
    </div>
  )
}

export default App