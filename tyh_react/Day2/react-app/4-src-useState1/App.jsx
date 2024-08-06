import React, { useState } from "react";

// 函数组件在 react v16.8 之前不能定义状态
// 16.8 新增了hooks，解决函数组件的状态问题，可以完全代替类组件的功能
// hook: 名字以 use 开头的函数
// hook使用规则：
//   1. 只能在函数组件的最顶层使用，不能在 if、for、子函数中使用
//   2. 只能在函数组件和自定义hook中使用，不能在class组件和普通函数中使用

const App = () => {
  const [count, setCount] = useState(10);
  const [title, setTitle] = useState("标题");
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [obj, setObj] = useState({
    name: "小明",
    age: 0,
    info: {
      a: {
        b: {
          c: {
            d: 100,
          },
        },
      },
    },
  });

  const add = () => {
    const newArr = [...arr];
    newArr.push(Math.random());
    setArr(newArr);
    // 前添
    // setArr([...arr, Math.random()]);
    // 后添
    // setArr([Math.random(), ...arr]);
  };

  return (
    <div>
      <h1>{title}</h1>
      {/* 实现类似input双向绑定功能 */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={add}>添加</button>
      <ul>
        {arr.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
      <hr />
      <button
        onClick={() => {
          setObj({ ...obj, age: obj.age + 1 });
        }}
      >
        age+
      </button>
      <button
        onClick={() => {
          const newObj = { ...obj };
          newObj.info.a.b.c.d++;
          setObj(newObj);
        }}
      >
        d++
      </button>
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
};

export default App;
