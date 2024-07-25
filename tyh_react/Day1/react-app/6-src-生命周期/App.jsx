// 导入React的Component基类，用于创建自定义组件
import { Component } from "react";
// 导入Child组件，这个组件位于同级目录下的components文件夹中
import Child from "./components/Child";

class App extends Component {
  // 组件的构造函数，通常在这里进行state的初始化和方法的绑定
  // 初始化阶段： 初始化state和props
  constructor(props) {
    // 调用父类的构造函数
    super(props);
    this.state = {
      // 初始化state
      count: 0,
      // 初始化title
      title: "我是初始化标题",
    };
    console.log("%c constructor 初始化", "color: skyblue; font-size: 20px");
  }

  // componentDidUpdate生命周期方法，通常在这里处理组件更新后的逻辑
  // componentDidMount() {
  //   // 组件挂载完成，可以获取到dom元素，可以在此声明周期调用接口
  //   console.log(
  //     "%c 组件挂载完成 componentDidMount",
  //     "color: hotpink; font-size: 20px"
  //   );
  // }

  // componentDidUpdate() {
  //   // 组件渲染成功，可以获取到最新的dom
  //   console.log(
  //     "%c 组件挂载完成 componentDidMount",
  //     "color: hotpink; font-size: 20px"
  //   );
  // }

  // 使用class fields语法定义state
  state = {
    title: "标题", // 初始标题状态
    count: 0, // 初始计数状态
  };

  render() {
    // 解构赋值从state中取出count和title
    const { count, title } = this.state;
    console.log("%c App render", "color: red; font-size: 20px");

    // 返回JSX，定义组件的UI结构
    return (
      <div>
        <h2>{title}</h2>
        <div>
          <input
            type="text"
            defaultValue={"我是默认内容"}
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        {count}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          -
        </button>

        {count < 5 && <Child count={count} />}

        <hr />

        <b style={{ color: "red" }}>我是一个b标签</b>
        {/* 使用dangerouslySetInnerHTML属性来设置HTML内容，允许插入HTML标签 */}
        <div
          dangerouslySetInnerHTML={{
            __html: '<b style="color: green">我是一个b标签</b>',
          }}
        ></div>
      </div>
    );
  }
}

export default App;
