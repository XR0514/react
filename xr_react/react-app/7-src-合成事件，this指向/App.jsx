// eslint-disable-next-line no-unused-vars
import React, { Component, createRef } from 'react'

// import Child from './components/Child'

// 使用class语法糖写组件
class App extends Component {


  state = {
    count: 0
  }

  // 两种函数的写法（箭头函数和普通函数）
  add1 = (e) => {
    // e：合成事件的对象，经过react包装之后的事件对象
    console.log(e)
    console.log('原本事件对象', e.nativeEvent)
  }

  add2() {
    // 因为react自己实现了一套事件注册、分发的机制，统一了不同浏览器之间事件系统的差异，例如阻止冒泡统一使用e.stopPropagation
    // this指向undefined，因为作为button的点击事件的函数，并没有直接绑定在button上面，而是绑在了 document 上面，简化了DOM原生事件，减少了内存开销
    // 然后根据绑定事件的元素去document寻找绑定的事件
    console.log(this)
  }

  // 渲染组件自动执行此函数（必须）
  render() {

    return (
      <div>
        <h2>this指向</h2>
        {this.state.count}
        <button onClick={this.add1}>按钮1</button>
        {/* 合成事件：利用事件冒泡原理把所有事件都绑定到了 document 上，然后根据事件触发的元素去查找要执行的函数 */}
        {/* 修改this指向，里面的this指向当前App */}
        <button onClick={this.add2.bind(this)}>按钮2</button>
        <button onClick={() => {
          // 箭头函数没有this，写了this直接指向其父元素挂靠的环境
          // 这里的this直接指向App
          this.add2()
        }}>按钮3</button>
      </div>
    )
  }
}

export default App
