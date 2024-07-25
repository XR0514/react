import React, { Component } from "react";
// 导入 classnames 库，用于动态生成类名
import classNames from "classnames";
// 导入 CSS Modules 文件，实现样式隔离
import style from "./child.module.css";
// cssmodule: 样式隔离

class Child extends Component {
  state = {
    curIndex: 0, // 定义 curIndex 状态，初始值为 1
  };

  // 定义 change 方法，用于切换 curIndex 的值
  change = () => {
    // 使用 setState 更新状态
    this.setState({
      // 切换 curIndex 状态的值
      curIndex: this.state.curIndex === 1 ? 0 : 1,
    });
  };

  render() {
    return (
      <div className={style.childWrap}>
        {/* 使用 CSS Modules 类名包裹 div */}
        <h2>Child</h2>
        <button onClick={this.change}>按钮</button>
        {/* 在子组件使用公共样式/父组件样式 */}
        <div className={`${style.box} bold`}>Child</div>
        <hr />
        {/* 使用 classnames 动态添加类名 */}
        <div
          className={classNames("bold", style.box, {
            [style.active]: this.state.curIndex === 1,
          })}
        >
          child
        </div>
        <hr />
        <div className={style.row}>{this.props.children}</div>
        {/* 使用 CSS Modules 类名展示子组件 */}
        <div className={style.row}>{this.props.second}</div>
        {/* 通过 props 接收并展示 second 属性 */}
        <div className={style.row}>{this.props.third}</div>
        {/* 通过 props 接收并展示 third 属性 */}
      </div>
    );
  }
}

export default Child;
