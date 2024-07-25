import { Component, createRef } from "react";

class App extends Component {
  state = {
    title: "标题",
  };

  inpRef = createRef();

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              title: "重置标题123",
            });
          }}
        >
          重置
        </button>
        <h1>{this.state.title}</h1>
        {/* 非受控组件 */}
        <input type="text" defaultValue={"我是默认值"} ref={this.inpRef} />
          
        <hr />

        {/* 受控组件：状态受到state控制 */}
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => {
            this.setState({
              title: e.target.value,
            });
          }}
        />

        <hr />

        <button
          onClick={() => {
            console.log(this.inpRef.current.value);
          }}
        >
          获取input内容
        </button>
      </div>
    );
  }
}

export default App;
