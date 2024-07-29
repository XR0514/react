// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

// 使用class语法糖写组件
class App extends Component {
  // 存储数据
  state = {
    title: '大标题',
    arr: [1,2,3,4,5,6],
    count: 0
  }

  add = () => {
    // 响应式修改数据
    this.setState({
      count: this.state.count + 1
    })

  }



  // 渲染组件自动执行此函数（必须）
  render() { 
    // this为组件实例对象
    // console.log(this)
    // 解构赋值
    const { title, arr, count } = this.state 
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {arr.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        <hr />
        {/* 绑定事件的值调的函数若没有参数直接调，有参数时需要写一个函数，在函数体里面调用函数 */}
        {count > 0 && 
        // 空标签包裹，相当于vue的template
          <>
            <button onClick={() => {
              this.setState({
                count: this.state.count - 1
              })
            }}>-</button>
            {count}
          </>
        }
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

export default App
