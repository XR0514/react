import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);

  // 对象会覆盖上一次的值(每次渲染一次组件)
  // const add = () => {
  //   setCount(count + 1);
  //   console.log("count", count); // 上一次的值
  //   setCount(count + 1);
  //   console.log("count", count); // 上一次的值
  //   setCount(count + 1);
  //   console.log("count", count); // 上一次的值
  // };

  // 函数会修改上一次的值(每次渲染一次组件)
  const add = () => {
    setCount((prev) => {
      console.log("prev", prev); // 上一次的值
      return prev + 1;
    });
    setCount((prev) => {
      console.log("prev", prev); // 上一次的值
      return prev + 1;
    });
    setCount((prev) => {
      console.log("prev", prev); // 上一次的值
      return prev + 1;
    });
  };

  console.log("渲染组件");

  return (
    <div>
      {count}
      <button onClick={add}>+</button>
    </div>
  );
};

export default App;
