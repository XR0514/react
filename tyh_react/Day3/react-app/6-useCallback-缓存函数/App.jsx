import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

// useCallback
// 作用：缓存函数，依赖项改变重新创建函数

const arr = [];

const App = () => {
  const [count, setCount] = useState(1);
  const [xm, setXm] = useState({
    name: "小明",
    age: 22,
    sex: "男",
    hobby: ["吃饭"],
  });

  // const add = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  // 可以使用 useMemo 实现 useCallback 的功能
  const add = useMemo(() => {
    return () => {
      setCount(count + 1);
    };
  }, [count]);

  if (!arr.includes(add)) {
    arr.push(add);
  }
  console.log(arr);

  return (
    <div>
      {count}
      <button onClick={add}>count+</button>
      <hr />
      <p>
        age：{xm.age}
        <button onClick={() => setXm({ ...xm, age: xm.age + 1 })}>age+</button>
      </p>
    </div>
  );
};

export default App;
