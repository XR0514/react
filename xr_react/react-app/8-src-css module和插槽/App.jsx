/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import Child from './components/Child'

 class App extends Component {


  box = () => {
    return (
      <ul>
        <li>666666</li>
        <li>88888888</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h1 className='title'>App</h1>
        <div className="box">456</div>
        {/* 可以直接把排版当参数传递 */}
        <Child
          second={<div>hhhhhhh</div>}
          // 或者通过函数传递
          third={this.box()}
        >
          {/* 写在子组件标签中间的，在子组件中通过this.state.cildren访问 */}
          <p>11111</p>
          <p>222222</p>
          <p>33333333</p>
        </Child>
      </div>
    )
  }
}

export default App
