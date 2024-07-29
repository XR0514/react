
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { jsx } from 'react/jsx-runtime'




// // 虚拟DOM: 表述真实DOM的对象
// // 创建一个id为box的div，第三个参数为该div的子元素
// const div1 = React.createElement('div', { id: 'box' }, [
//   React.createElement('h1', null, ['我是标题']),
//   React.createElement('div', { className: 'wrap' }, [
//     React.createElement('p', null, [
//       React.createElement('span', null, ['123456']),
//       React.createElement('span', null, ['456789'])
//     ])
//   ])
// ])
// console.log(div1)

// jsx语法：
const sum = (a, b) => a + b
const num = 55

const renderNum = n => {
  if (n >= 90) {
    return <b style={{color: 'green'}}>{n}在90分以上</b>
  } else if ( n >= 60 && n < 90) {
    return <b style={{color: 'orange'}}>{n}在60-90之间</b>
  } else {
    return <i style={{color: 'red'}}>{n}在60分以下</i>
  }
}

const flag = false

const div2 = (
  <div id='box' style={{color: 'black'}}>
    <h1>我是标题</h1>
    <ul>
      {/* 大括号里面的渲染类型 */}
      <li>字符串：{'123'}</li>
      <li>数字：{456}</li>
      <li>布尔值true: {true}</li>
      <li>布尔值false: {false}</li>
      <li>null: {null}</li>
      <li>undefined: {undefined}</li>
      <li>数组: {[1,2,3,4,5,6]}</li>
      {/* <li>对象: {{name: 'xm'}}</li> */}
      <li>调用函数：{sum(2, 8)}</li>
    </ul>
    <label htmlFor="haha">哈哈</label>
    <input type="checkbox" id='haha' />

    <hr />
    {/* 条件判断 */}
    <div>
      {num >= 90
      ?
      <b style={{color: 'green'}}>{num}在90分以上</b>
      : 
      (num < 90 && num >= 60 ? <b style={{color: 'orange'}}>{num}在60-90之间</b> : <i style={{color: 'red'}}>{num}在60分以下</i> )
      
      }
    </div>
    <hr />
    <div>
      {renderNum(80)}
    </div>
    <hr />
    <div>{flag ? <b>标签a</b> : null}</div>
    <div>{flag && <b>标签a</b>}</div>
    
  </div>
)
console.log(div2)


const arr1 = ['a', 'b', 'c']
const arr2 = [
  <li key={'a'}>a</li>,
  <li key={'b'}>b</li>,
  <li key={'c'}>c</li>,
  <li key={'d'}>d</li>
]

const div3 = <div>
  {/* 循环遍历, 使用map */}
  {arr1.map(item => {
    return <p key={item}>{item}</p>
  })}
  <hr />
  {
    arr2.map(item => {
      return item
    })
  }
</div>



// 本质上还是个对象，和 React.createElement 一样
console.log(div3)

const root = document.getElementById('root')
// 把虚拟DOM渲染到根元素里面
ReactDOM.createRoot(root).render(div3)