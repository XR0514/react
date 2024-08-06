import React, { useState, useEffect, useRef, useMemo } from "react";

// useMemo
// 作用：缓存计算结果，依赖项改变时重新执行函数计算结果，没改变就从缓存中读取数据

const App = () => {
  const [count, setCount] = useState(1);
  const [xm, setXm] = useState({
    name: "小明",
    age: 22,
    sex: "男",
    hobby: ["吃饭"],
  });
  const add = () => setCount(count + 1);

  const info = useMemo(() => {
    console.log("计算结果");
    return `我叫${xm.name},今年${xm.age}岁`;
  }, [xm.name, xm.age]);
  
  return (
    <div>
      {count}
      <button onClick={add}>count+</button>
      <hr />
      <p>
        sex: {xm.sex}
        <button onClick={() => setXm({ ...xm, sex: Math.random() })}>
          修改性别
        </button>
      </p>
      <p>
        sex: {xm.age}
        <button onClick={() => setXm({ ...xm, age: xm.age + 1 })}>
          修改年龄
        </button>
      </p>
      {info}
    </div>
  );
};

export default App;
