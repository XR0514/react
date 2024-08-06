import React, { useState, useEffect } from "react";

// useEffect: 处理组件副作用，可以实现类似生命周期的功能
// useEffect(callback, [依赖项1， 依赖项2, ...])
// 依赖项改变执行 callback
// 1. 依赖项不传，组件中有任意数据更新就会执行，类似 componentDidUpdate
// 2. 依赖项传入空数组，callback只执行一次，类似 componentDidMount
// 3. 依赖项数组传入具体值，监听到依赖项改变时执行 callback
// 4. callback return 的函数会在组件销毁之前执行，类似 componentWillUnmount

const Child = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum((n) => n + 1);
      console.log("定时器正在执行");
    }, 1000);

    return () => {
      console.log("组件即将销毁");
      clearInterval(timer);
    };
  }, []);

  return <div>定时器：{num}</div>;
};

const App = () => {
  const [title, setTitle] = useState("标题");
  const [obj, setObj] = useState({ name: "小明", age: 10 });
  const [count, setCount] = useState(10);

  // useEffect(() => {
  //   // 等待页面渲染完成执行，可以获取dom元素
  //   console.log("useEffect 执行了,页面分析完成", document.querySelector("p"));
  // });

  // useEffect(() => {
  //   console.log("页面加载完成", document.querySelector("p"));
  // }, []);

  useEffect(() => {
    console.log("count改变了", count);
  }, [count]);

  useEffect(() => {
    console.log("obj 或者 title 改变了", obj, title);
  }, [obj.name, title]);

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
      <button
        onClick={() => {
          setObj({ ...obj, age: obj.age + 1 });
        }}
      >
        age+
      </button>
      <p>age: {obj.age}</p>
      <hr />
      <button onClick={() => setCount(count + 1)}>count+</button>
      <p>{count}</p>
      <hr />
      {count < 15 && <Child />}
    </div>
  );
};

export default App;
