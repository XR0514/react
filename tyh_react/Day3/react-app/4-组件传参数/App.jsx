import React, { useState, useEffect, useRef } from "react";

const Child = (props) => {
  console.log("传入的参数", props);

  return (
    <div style={{ border: "1px solid", padding: "20px" }}>
      <h3>Child组件</h3>
      <p>count: {props.count}</p>
      <button onClick={props.onAdd}>add</button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const [xm, setXm] = useState({
    name: "小明",
    age: 22,
    sex: "男",
    hobby: ["吃饭"],
  });

  const add = () => setCount(count + 1);
  return (
    <div>
      {count}
      <button onClick={add}>count+</button>
      {/* 渲染 Child 组件，并传递 count, xm 对象的属性以及 add 函数作为参数 */}
      <Child count={count} {...xm} onAdd={add} />
    </div>
  );
};

export default App;
