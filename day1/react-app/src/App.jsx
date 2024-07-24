// eslint-disable-next-line no-unused-vars
import React, { Component, createRef } from 'react'

// import Child from './components/Child'

// 使用class语法糖写组件
class App extends Component {


  state = {
    count: 0
  }

  // 两种函数的写法（箭头函数和普通函数）
  add1 = () => {
    console.log(this)
  }

  add2() {
    console.log(this)
  }

  // 渲染组件自动执行此函数（必须）
  render() {

    return (
      <div>
        <h2>this指向</h2>
        {this.state.count}
        <button onClick={this.add1}>按钮1</button>
        <button onClick={this.add2}>按钮2</button>
      </div>
    )
  }
}

export default App
