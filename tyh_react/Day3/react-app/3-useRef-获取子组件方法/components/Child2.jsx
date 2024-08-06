import React, { useState, forwardRef, useImperativeHandle } from "react";

// 定义 Child2 组件，它是一个函数组件，接受 props 和 parentRef 作为参数
const Child2 = (props, parentRef) => {
  const [num, setNum] = useState(0);
  const [flag, setFlag] = useState(true);

  // 定义一个名为 change 的函数，用于更新 num 状态
  const change = (n) => {
    // 将传入的 n 值加到当前的 num 状态上
    setNum(num + n);
  };

  // 使用 useImperativeHandle 钩子来允许父组件访问或操作子组件的实例
  useImperativeHandle(
    parentRef,
    () => {
      // 回调中返回一个对象，这个对象包含了 num 状态和 change 函数
      // 父组件就可以通过 ref 访问这些属性和方法
      console.log("给ref赋值", flag);
      return {
        num, // 将 num 状态暴露给 ref
        change, // 将 change 函数暴露给 ref
      };
    },
    [num]
  ); // 依赖数组告诉 React 当 num 改变时重新运行 useImperativeHandle 的回调

  // 渲染 JSX 元素
  return (
    <div style={{ border: "1px solid", padding: "20px" }}>
      <h2>Child2</h2>
      <button onClick={() => change(1)}>+</button>
      {num}
      <button onClick={() => setFlag(!flag)}>{JSON.stringify(flag)}</button>
    </div>
  );
};

// 使用 forwardRef 高阶组件来将父组件传入的 ref 转发到 Child2 组件
// 父组件就可以通过 ref 访问 Child2 组件的实例
export default forwardRef(Child2);
