/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Consumer } from '../context/count'
import { Consumer as TextConsumer } from '../context/text'

// 子组件为类组件
class Child3 extends Component {

  // value Provider传过来的数据
  renderCtx = value => {
    return (
      <TextConsumer>
        {text => (
          <div className='box'>
            <h2>Child-{text}</h2>
            <p>App的count：{value.count}</p>
            {/* 调用父组件的方法 */}
            <button onClick={() => value.setCount(n => n - 1)}>-</button>
          </div>
        )}
      </TextConsumer>
    ) 
  }

  render() {
    return (
      <Consumer>
        {this.renderCtx}
      </Consumer>
    )
  }
}

export default Child3
