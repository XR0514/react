import React, { Component } from "react";

// 组件
class App extends Component {
  // 变量
  state = {
    title: "标题",
    arr: ["a", "b", "c", "d"],
    count: 0,
  };

  // 函数
  add = () => {
    // 修改state数据, 把传入的对象和原本的state进行合并
    this.setState({
      count: this.state.count + 1,
    });
  };

  changCount = (n) => {
    this.setState({
      count: this.state.count + n,
    });
  };

  // 渲染组件自动执行此函数
  render() {
    console.log("组件实例对象", this.state);
    const { title, arr, count } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {count > 0 && (
          <>
            <button onClick={() => this.changCount(-1)}>-</button>
            {count}
          </>
        )}
        <button onClick={this.add}>+</button>
        <ul>
          {arr.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
