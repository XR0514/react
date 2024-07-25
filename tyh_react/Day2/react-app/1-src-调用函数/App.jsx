import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  add = (e) => {
    console.log("点击了按钮", e.target);
    console.log("count", this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  changeCount = (n, e) => {
    console.log("传入实参", n);
    console.log("点击了按钮", e.target);
    this.setState({ count: this.state.count + n });
  };

  render() {
    return (
      <div>
        <h2>调用函数</h2>
        {this.state.count}
        <button onClick={this.add}>按钮1</button>
        <button onClick={(e) => this.changeCount(2, e)}>按钮2</button>
      </div>
    );
  }
}

export default App;
