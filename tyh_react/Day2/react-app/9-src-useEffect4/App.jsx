import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [title, setTitle] = useState("标题");
  const domRef = useRef();
  const inpRef = useRef();

  useEffect(() => {
    console.log(domRef.current);
  }, [num]);

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={inpRef}
      />
      <p ref={domRef}>{num}</p>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button
        onClick={() => {
          console.log(inpRef.current.value);
        }}
      >
        获取inp
      </button>
    </div>
  );
};

export default App;
