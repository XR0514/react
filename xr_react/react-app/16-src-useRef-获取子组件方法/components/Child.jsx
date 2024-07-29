// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'


// 类组件
export default class Child extends Component {
  state = {
    num: 0
  }

  add = n => {
    this.setState({
      num: this.state.num + n
    })
  }
  
  render() {
    return (
      <div style={{border: '2px solid', padding: '20px'}}>
        <h1>Child子组件</h1>
        {this.state.num}
        <button onClick={() => this.add(1)}>+</button>
      </div>
    )
  }
}


