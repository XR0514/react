import React, { Component, PureComponent } from "react";
// PureComponent: 性能优化，内部使用 shouldComponentUpdate, 比较所有的props和state是否发生改变

export default class Child extends PureComponent {
  state = {
    title: "子组件的标题",
  };

  // 性能优化，可以判断当前组件中使用的变量是否有更新，减少不必要的更新
  // shouldComponentUpdate 是一个生命周期方法，用于控制组件是否应该重新渲染
  // PureComponent 中的 shouldComponentUpdate 默认使用浅比较 props 和 state
  // 这里我们重写了这个方法，以实现更精细的控制
  shouldComponentUpdate(nextProps, nextState) {
    // nextProps: 最新的props
    // nextState: 最新的state

    // 打印即将接收的新 props 和当前的 props，以便于调试
    console.log("即将接收的 props:", nextProps);
    console.log("当前的 props:", this.props);

    // 打印即将接收的新 state 和当前的 state，以便于调试
    console.log("即将接收的 state:", nextState);
    console.log("当前的 state:", this.state);

    // 比较 nextState 中的 title 和当前 state 中的 title 是否不同
    // 同时比较 nextProps 中的 count 和当前 props 中的 count 是否不同
    // 如果 title 或 count 发生变化，则返回 true，表示组件需要更新
    // 如果都没有变化，则返回 false，表示组件不需要更新，从而提高性能
    if (
      nextState.title !== this.state.title ||
      nextProps.count !== this.props.count
    ) {
      return true;
    }
    return false;
  }

  render() {
    console.log("%c Child render", "color: green; font-size: 20px");
    return (
      <div className="box">
        <p>父组件的count: {this.props.count}</p>
        <h2>{this.state.title}</h2>
        <button
          onClick={() => {
            this.setState({
              title: Math.random(),
            });
          }}
        >
          修改标题
        </button>
      </div>
    );
  }
}
