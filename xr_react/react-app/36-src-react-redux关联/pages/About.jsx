/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
// 高阶组件：连接组件和store，把store中的数据传给组件
import { connect } from 'react-redux'

// 类组件
class About extends Component {

  add = () => {
    this.props.dispatch({
      type: 'CHANGE_AGE',
      payload: 2
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h1>About</h1>
        <p>age: {this.props.age}</p>
        <button onClick={this.add}>age +</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  // console.log('store中的state', state)
  // return的数据会添加到组件的props中
  return state
}
// 高阶组件：连接组件和store，把store中的数据传给组件
export default connect(mapStateToProps)(About)
