import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(1);
  const [xm, setXm] = useState({
    name: "小明",
    age: 22,
    sex: "男",
    hobby: ["吃饭"],
  });

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log("App渲染了");

  return (
    <div>
      {count}
      <button onClick={add}>count+</button>
      <hr />
      <p>
        age：{xm.age}
        <button onClick={() => setXm({ ...xm, age: xm.age + 1 })}>+</button>
      </p>
      <Child
        count={count}
        onAdd={add}
        xm={{ name: "xm", info: { a: { b: 200 } } }}
      />
    </div>
  );
};

export default App;
