// eslint-disable-next-line no-unused-vars
import React, { Component, createRef } from 'react'

import Child from './components/Child'

// 使用class语法糖写组件
class App extends Component {
  // // 用于初始化类组件的状态（state）和绑定事件处理函数。它在组件实例被创建时立即执行一次
  // constructor(props) {
  //   // 调用父类的构造函数
  //   super(props) 

  //   // 初始化数据
  //   this.state = {
  //     count: 0
  //   }

  //   console.log('constructor 初始化')
  // }

  // // 挂载完成，可以获取dom元素，可以在此生命周期调用接口
  // componentDidMount() {
  //   console.log('componentDidMount 组件挂载完成')
  // }

  // // 更新渲染成功，可以获取到最新的dom元素
  // componentDidUpdate() {
  //   console.log('componentDidUpdate 组件更新渲染成功')
  // }

  state = {
    count: 0,
    title: 'hahha'
  }

  // 渲染组件自动执行此函数（必须）
  render() {
    const { count, title } = this.state
    // 修改父组件，子组件必然更新；修改子组件，父组件不更新
    console.log('%c App render 渲染', 'color: red; font-size: 30px')
    return (
      <div>
        <h2>{title}</h2>
        <p><input type="text" value={title} onChange={e => {
          this.setState({
            title: e.target.value
          })
        }} /></p>
        <button onClick={() => {
          this.setState({
            count: this.state.count - 1
          })
        }}>-</button>
        {count}
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>+</button>

        <hr />
        { count < 5 && <Child count={count}></Child> }
        
        <hr />
        {/* 渲染内容 */}
        <div dangerouslySetInnerHTML={{ __html: '<b style="color: red">我是一个b标签</b>' }}></div>
      </div>
    )
  }
}

export default App
