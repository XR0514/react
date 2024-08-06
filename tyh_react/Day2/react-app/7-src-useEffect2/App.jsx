import React, { useState, useEffect } from "react";

// useEffect: 处理组件副作用，可以实现类似生命周期的功能
// useEffect(callback, [依赖项1， 依赖项2, ...])
// 依赖项改变执行 callback
// 1. 依赖项不传，组件中有任意数据更新就会执行，类似 componentDidUpdate
// 2. 依赖项传入空数组，callback只执行一次，类似 componentDidMount
// 3. 依赖项数组传入具体值，监听到依赖项改变时执行 callback
// 4. callback return 的函数会在组件销毁之前执行，类似 componentWillUnmount

const App = () => {
  let n = 0;
  const [num, setNum] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // 定时器中存的时App组件第一次执行时的变量 num
      // setNum(num + 1)
      setNum((n) => n + 1);
    }, 1000);
  }, []);

  console.log("app渲染了", n, num);
  return (
    <div>
      定时器：{num}
      <button
      // onClick={() => {
      //   setNum(num + 1);
      //   n++;
      // }}
      >
        +
      </button>
    </div>
  );
};

export default App;

