/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import getPos from '../hoc/getPos'

class Child2 extends Component {

  state = {
    count: 0
  }

  render() {
    return (
      <div className='box'>
        <h2>Child2</h2>
        <p>鼠标位置：{JSON.stringify(this.props.pos)}</p>
        <p>{this.state.count}</p>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>+</button>
      </div>
    )
  }
}

// 调用自定义高阶组件，给 Child2 添加公共逻辑，相当于套了个父级
export default getPos(Child2)
