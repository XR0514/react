import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const inpRef = useRef();

  return (
    <div>
      <input type="text" ref={inpRef} defaultValue={"我是默认内容"} />
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
