// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import Nav from './components/Nav'
import List from './components/List'

// 使用class语法糖写组件
class App extends Component {
  // 存储数据
  state = {
    tabList: [
      {singer: '周杰伦', songs: ['稻香', '一路向北', '七里香', '花海']},
      {singer: '林俊杰', songs: ['美人鱼', '愿与愁', '可惜没如果', '江南']},
      {singer: 'seventeen', songs: ['落花', 'Circles', 'HOT', 'F**k My Life']}
    ],
    curIndex: 0
  }

  changeIndex = (index) => {
    this.setState({
      curIndex: index
    })
  }

  // 渲染组件自动执行此函数（必须）
  render() { 
    const { tabList, curIndex } = this.state
    return (
      <div>
        <Nav tabList={tabList} curIndex={curIndex} changeIndex={this.changeIndex}></Nav>
        <List songs={tabList[curIndex].songs}></List>
      </div>
    )
  }
}

export default App
