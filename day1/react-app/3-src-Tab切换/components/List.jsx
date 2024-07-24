import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { songs } = this.props
    return (
      <ul>
        {songs.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    )
  }
}
