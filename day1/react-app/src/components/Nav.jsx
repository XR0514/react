// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

 class Nav extends Component {
  

  render() {
    // console.log(this.props)
    const { tabList, curIndex, changeIndex } = this.props
    return (
      <nav>
        {tabList.map((item, index) => {
          return <span key={item.singer} className={curIndex === index ? 'active' : null} onClick={() => changeIndex(index)}>{item.singer}</span>
        })}
      </nav>
    )
  }
}

export default Nav
