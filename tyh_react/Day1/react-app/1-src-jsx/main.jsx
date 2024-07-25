import React from "react";
import ReactDOM from "react-dom/client";

// 虚拟dom: 用来描述真实 DOM 的对象，虚拟 DOM 可以在组件状态更新时进行快速比较，查找出页面中真正需要变化的部分，从而避免了直接操作真实DOM带来的性能问题
// const div = React.createElement("div", { id: "box" }, [
//   React.createElement("h1", { key: "a" }, ["我是标题"]),
//   React.createElement("ul", { key: "b" }, [
//     React.createElement("li", { key: "1" }, ['11111']),
//     React.createElement("li", { key: "2" }, ['11111']),
//   ]),
// ]);
// console.log(div);

// jsx语法：js + xml，本质上  React.createElement 的语法糖，编译时通过babel转译成js语法运行
const title = "标题"; // 字符串类型
const num = 100; // 数字类型
const sum = (a, b) => a + b; // 函数
const renderNum = (n) => {
  if (n > 90) {
    return <div>大于90</div>;
  } else if (n <= 90 && n > 60) {
    return <div>60 - 90中间</div>;
  } else {
    return <div>不及格</div>;
  }
};
const flag = true;

// const div = (
//   <div id="box" className="box" style={{ color: "#333" }}>
//     <h1>{title}</h1>
//     <ul>
//       <li>字符串: {"abc"}</li>
//       <li>数字: {100}</li>
//       <li>布尔值: {true}</li>
//       <li>布尔值: {false}</li>
//       <li>null: {null}</li>
//       <li>undefined: {undefined}</li>
//       <li>数组: {[1, 2, 3, 4, 5]}</li>
//     </ul>
//     <label htmlFor="men">男</label>
//     <input type="checkbox" id="men" />
//     <div>
//       {num >= 90 ? (
//         <b style={{ color: "green" }}>90分以上: {num}</b>
//       ) : (
//         <i style={{ color: "red" }}>90分以下: {num}</i>
//       )}
//     </div>
//     <div>{renderNum(num)}</div>
//     <div>{flag ? <b>我是b标签</b> : null}</div>
//     <div>{flag && <b>我是b标签</b>}</div>
//   </div>
// );

const arr = ["a", "b", "c"];
const arr1 = [<p key="a">a</p>, <p key="b">b</p>, <p key="c">c</p>];
const div = (
  <div>
    {arr.map((item) => {
      return <p key={item}>{item}</p>;
    })}
    <hr />
    {arr1}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
