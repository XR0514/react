/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import getPos from '../hoc/getPos'

class Child1 extends Component {

  state = {
    title: 'Child1组件',
  }

  render() {
    return (
      <div className='box'>
        <h2>{this.state.title}</h2>
        <p>{this.props.text}</p>
        <p>鼠标位置：{JSON.stringify(this.props.pos)}</p>
        <ul>
          <li>8</li>
          <li>8</li>
          <li>8</li>
          <li>8</li>
          <li>8</li>
        </ul>
      </div>
    )
  }
}

export default getPos(Child1)
