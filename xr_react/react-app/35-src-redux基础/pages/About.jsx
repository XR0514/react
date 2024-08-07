/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import store from '../store'

// 类组件
export default class About extends Component {

  state = {
    age: store.getState().age
  }

  add = () => {
    store.dispatch({
      type: 'CHANGE_AGE',
      payload: 2
    })
  }

  unSubscribe = null

  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        age: store.getState().age
      })
    })
  }

  componentWillUnmount() {
    // 组件关闭销毁监听
    this.unSubscribe()
  }


  render() {
    return (
      <div>
        <h1>About</h1>
        <p>age: {this.state.age}</p>
        <button onClick={this.add}>age +</button>
      </div>
    )
  }
}
