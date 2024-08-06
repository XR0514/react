import React, { useState, useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("num改变了", num);

    // 执行销毁的逻辑
    return () => {
      console.log("num改变时先执行上一次存的此函数", num);
    };
  }, [num]);

  // useEffect(() => {
  //   return () => {
  //     // 只在组件销毁时执行
  //   }
  // }, [])

  return (
    <div>
      定时器：{num}
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default App;
