import { Component, createRef } from "react";

// 定义一个名为add的方法，用于处理点击事件，增加计数器的值
class App extends Component {
  state = {
    count: 0,
    title: "标题",
  };

  add = () => {
    // 调用setState修改数据，会触发页面更新
    // setState是异步修改数据的函数
    // 会把传入的对象和当前state种的对象进行合并
    // 连续调用多次 setState react会进行合并更新，只渲染一次组件
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // console.log(this.state.count);

    this.setState((prevState) => {
      // prevState: 当前最新的state
      // 如果setState传入一个函数作为参数，会把函数return的对象和当前state进行合并
      // console.log(prevState)
      return {
        count: prevState.count + 1,
      };
    });

    // 使用setState方法更新状态。这里传入一个函数，该函数接收前一个状态prevState作为参数，并返回一个对象，这个对象将与当前状态合并
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });

    // 第三次调用setState，这次传入了一个回调函数作为第二个参数。这个回调将在状态更新且组件重新渲染后执行，用于输出当前boxRef引用的DOM元素
    this.setState(
      (prevState) => {
        return {
          count: prevState.count + 1,
        };
      },
      () => {
        // 等待本次页面渲染完成执行此函数
        // console.log(this.box.outerHTML);
        console.log(this.boxRef.current);
      }
    );
    // 在setState调用后立即执行，但由于this.state的异步性，打印的值可能不是最新的
    // console.log(this.state.current);
  };

  // 创建ref对象
  // 创建一个名为boxRef的引用，使用createRef函数
  boxRef = createRef();

  render() {
    console.log("最新数据", this.state.count);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button>-</button>
        <p ref={(el) => (this.box = el)}>{this.state.count}</p>
        {/* <p ref={this.boxRef}>{this.state.count}</p> */}
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default App;
