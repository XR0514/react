import React, { useState, useEffect, useRef } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

// useRef:
// 1. 获取dom元素
// 2. 存和组件渲染无关的数据（例如定时器），useRef创建的对象地址会在组件的生命周期中保持不变，修改ref变量也不会触发组件更新
// 3. 获取子组件的数据和方法
// 4. 注意：获取函数子组件的数据和方法时需要配合 forwardRef 和 useImperativeHandle 使用

const App = () => {
  const child1Ref = useRef(null);
  const child2Ref = useRef(123);

  return (
    <div>
      <button
        onClick={() => {
          console.log("类组件", child1Ref);
          console.log("函数组件", child2Ref.current);
          child2Ref.current.change(4);
        }}
      >
        获取子组件
      </button>
      <Child1 ref={child1Ref} />
      <Child2 ref={child2Ref} />
    </div>
  );
};

export default App;
