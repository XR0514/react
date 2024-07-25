import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  add1 = (e) => {
    console.log(e);
    console.log("原本的事件对象", e.nativeEvent);
  };

  add2() {
    console.log(this); // 打印当前组件实例的 this 指向
  }

  // 组件挂载完成后执行的方法
  componentDidMount() {
    document.querySelector("h2").addEventListener("click", (e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <h2>this指向</h2>
        {this.state.count}
        <button onClick={this.add1}>按钮1</button>
        {/* 
          合成事件:
            1. React 自己实现了一套事件注册、分发的机制，统一了不同浏览器之间事件系统的差异, 例如阻止冒泡统一使用 e.stopPropagation()
            2. React 组件上声明的事件最终绑定到了 document 这个 DOM 节点上，而不是 React 组件对应的 DOM 节点。只有document这个节点上面才绑定了DOM原生事件，其他节点没有绑定事件。这样简化了DOM原生事件，减少了内存开销。
        */}
        {/* 按钮2点击时调用 add2 方法，并使用 bind 绑定 this 指向当前组件实例 */}
        <button onClick={this.add2.bind(this)}>按钮2</button>
        {/* 按钮3点击时调用 add2 方法，箭头函数中的 this 指向当前组件实例 */}
        <button onClick={() => this.add2()}>按钮3</button>
      </div>
    );
  }
}

export default App;
