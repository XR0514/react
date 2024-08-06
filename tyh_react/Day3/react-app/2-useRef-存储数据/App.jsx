import React, { useState, useEffect, useRef } from "react";

// useRef:
// 1. 获取dom元素
// 2. 存和组件渲染无关的数据（例如定时器），useRef创建的对象地址会在组件的生命周期中保持不变，修改ref变量也不会触发组件更新

// const App = () => {
//   const [num, setNum] = useState(0);
//   const count = useRef(0); // 记录组件渲染次数
//   console.log("组件渲染了", count);

//   return (
//     <div>
//       <p>计时器: {num}</p>
//       <button
//         onClick={() => {
//           setNum(num + 1);
//           count.current++;
//         }}
//       >
//         开始
//       </button>
//       <hr />
//       <button
//         onClick={() => {
//           // 修改此变量，组件不会触发更新
//           count.current++;
//         }}
//       >
//         手动加1
//       </button>
//     </div>
//   );
// };

const App = () => {
  const [num, setNum] = useState(5);
  const timer = useRef();

  const start = () => {
    timer.current = setInterval(() => {
      setNum((n) => {
        if (n <= 1) {
          stop();
        }
        return n - 1;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(timer.current);
  };

  const reset = () => {
    stop();
    setNum(5);
  };

  useEffect(() => {
    if (num > 10) {
      stop();
    }
  }, [num]);

  return (
    <div>
      <p>定时器: {num}</p>
      <button onClick={start}>开始</button>
      <button onClick={stop}>停止</button>
      <button onClick={reset}>重置</button>
    </div>
  );
};

export default App;
