// eslint-disable-next-line no-unused-vars
import React, { Component, createRef } from 'react'

// 使用class语法糖写组件
class App extends Component {
  // 存储数据
  state = {
    title: '标题哈哈哈',
    form: {
      name: '',
      age: '',
      gender: '',
      hobby: ''
    }
  }

  // 创建ref对象
  inpRef = createRef()


  changeForm = (key, val) => {
    this.setState({
      form: {
        ...this.state.form,
        [key]: val
      }
    })
  }

  // 渲染组件自动执行此函数（必须）
  render() {

    const { form } = this.state

    return (
      <div>
        <h1>{this.state.title}</h1>
        {/* 非受控组件，使用ref获取dom元素 */}
        <input type="text" defaultValue={'默认值'} ref={this.inpRef} />

        {/* 受控组件: 状态收到state控制 变量和组件同步更新 */}
        <input type="text" value={this.state.title} onChange={e => {
          this.setState({
            title: e.target.value
          })
        }} />

        <button onClick={() => {
          console.log(this.inpRef.current.value)
        }}>获取input的内容</button>


        <hr />
        <p>姓名：<input type="text" value={form.name} onChange={e => this.changeForm('name', e.target.value)} /></p>
        <p>年龄：<input type="text" value={form.age} onChange={e => this.changeForm('age', e.target.value)} /></p>
        <p>性别：<input type="text" value={form.gender} onChange={e => this.changeForm('gender', e.target.value)} /></p>
        <p>爱好：<input type="text" value={form.hobby} onChange={e => this.changeForm('hobby', e.target.value)} /></p>
        <button>提交</button>
        {JSON.stringify(form)}
      </div>
    )
  }
}

export default App
