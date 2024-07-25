import React, { Component } from "react";
import Child from "./components/Child";

class App extends Component {
  box = () => {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h1 className="title">标题</h1>
        <div className="box">box</div>
        {/* 类似插槽的功能 */}
        <Child second={<div>222222222</div>} third={this.box()}>
          <p>1</p>
          <p>22</p>
          <p>333</p>
        </Child>
      </div>
    );
  }
}

export default App;
