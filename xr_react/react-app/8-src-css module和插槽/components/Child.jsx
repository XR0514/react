/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

// 引入样式
import style from './child.module.css'

// 引入classnames插件，帮助拼接类名
import classNames from 'classnames'

// cssmodule：样式隔离
// console.log(style)

class Child extends Component {

  state = {
    show: false
  }

  render() {
    console.log(this)
    return (
      <div className='child'>
        <button onClick={() => {
          this.setState({
            show: !this.state.show
          })
        }}>按钮</button>
        <div className={classNames('bold', style.box, {[style.active]: this.state.show})}>6666</div>
        <hr />
        {/* 插槽 */}
        <div className={style.row}>{this.props.children}</div>
        <div className={style.row}>{this.props.second}</div>
        <div className={style.row}>{this.props.third}</div>
      </div>
    )
  }
}

export default Child
