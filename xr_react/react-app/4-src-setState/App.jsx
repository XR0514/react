// eslint-disable-next-line no-unused-vars
import React, { Component, createRef } from 'react'

// 使用class语法糖写组件
class App extends Component {
  // 存储数据
  state = {
    count: 0,
    title: '标题'
  }

  add = () => {
    // 调用setState修改数据，会触发页面更新
    // setState是异步修改数据的函数
    // 会把传入的对象和当前state中的对象进行合并
    // 连续调用多个setState, react会进行合并更新，只渲染一次组件
    // 传对象，不能确定this.state是最新值
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 })

    // 传函数，确定最新值
    this.setState((prevState) => {
      // prevState: 当前最新的state
      // 如果setState传入一个函数作为参数，会把函数return的对象和当前进行合并
      console.log(prevState)
      return {
        count: prevState.count + 1
      }
    })
    this.setState((prevState) => {
      console.log(prevState)
      return {
        count: prevState.count + 1
      }
    })
    // 第一个参数函数修改state，第二个参数函数获取页面最新的dom
    this.setState((prevState) => {
      console.log(prevState)
      return {
        count: prevState.count + 1
      }
    }, () => {
      // 等待本次页面渲染完成执行此函数
      // console.log(this.box.outerHTML)
      console.log(this.boxRef.current)
    })

    // console.log(this.state.count)
    // 会和更新count的setState进行合并，然后等待统一处理
    // this.setState({
    //   title: Math.random()
    // })
  }

  // 创建ref对象,获取dom元素
  boxRef = createRef()

  // 渲染组件自动执行此函数（必须）
  render() {
    console.log('最新数据', this.state.count)
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.add}>+</button>
        {/* 通过ref获取dom元素，里面的值为函数 */}
        {/* <p ref={el => this.box = el}>{this.state.count}</p> */}
        <p ref={this.boxRef}>{this.state.count}</p>
        <button>-</button>
      </div>
    )
  }
}

export default App
