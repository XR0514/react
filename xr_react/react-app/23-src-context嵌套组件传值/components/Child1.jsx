/* eslint-disable no-unused-vars */
import React from 'react'
import Child2 from './Child2'
import { Provider } from '../context/text'

const Child1 = () => {
  return (
    <Provider value={'标题'}>
      <div className='box'>
        <h2>Child1</h2>
        <Child2></Child2>
      </div>
    </Provider>
  )
}

export default Child1