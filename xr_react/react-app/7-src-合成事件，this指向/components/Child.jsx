// eslint-disable-next-line no-unused-vars
import React, { Component, PureComponent } from 'react'


// PureComponent：性能优化，内部使用 shouldComponentUpdate，比较所有的props和state是否发生改变
class Child extends PureComponent {

  state = {
    title: '标题'
  }

  // // 组件销毁
  // componentWillUnmount() {
  //   // 组件销毁之前，清除异步，清除定时器、事件监听等等
  //   console.log('componentWillUnmount 组件销毁')
  // }

  changeTitle = () => {
    this.setState({
      title: Math.random()
    })
  }

  // // 性能右滑，可以判断当前组件中使用的变量是否有更新，减少不必要的更新
  // shouldComponentUpdate(nextProps, nextState) {
  //   // nextProps: 最新的参数(父传子)
  //   // nextState：最新的state
  //   // console.log(nextState, this.state)
  //   // console.log(nextProps, this.props)
  //   // 只要父传给子的最新count和当前count不相等或者最新title和当前title不相等，都说明需要更新页面
  //   // 否则应该避免不必要的更新
  //   if (nextProps.count !== this.props.count || nextState.title !== this.state.title) {
  //     return true
  //   }
  //   return false
  // } 

  render() {
    const { title } = this.state
    console.log('%c Child render 渲染', 'color: green; font-size: 30px')
    return (
      <div className='child'>

        <p>父组件的count：{this.props.count}</p>
        <h2>{title}</h2>
        <button onClick={this.changeTitle}>修改标题</button>
      </div>
    )
  }
}

export default Child
