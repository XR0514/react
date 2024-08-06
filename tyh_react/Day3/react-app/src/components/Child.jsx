import React, { useState } from "react";

const Child = (props) => {
  const [title, setTitle] = useState("child标题");
  console.log("Child渲染了");

  return (
    <div style={{ border: "1px solid", padding: "20px" }}>
      Child渲染了
      <h2>{title}</h2>
      <button onClick={() => setTitle(Math.random())}>修改标题</button>
      <p>App的count：{props.count}</p>
      {/* <button onClick={() => props.onAdd()}>this.props.count++</button> */}
    </div>
  );
};

// React.memo: 高阶组件，性能优化，减少不必要的渲染
// 浅比较更新前的 props 和更新后的 props 是否有更新，有更新就重新渲染，没有更新就不会重新子组件
// 想要深比较可以给 React.memo 传入第二个函数，手动比较

// export default React.memo(Child, prev);
export default Child;
