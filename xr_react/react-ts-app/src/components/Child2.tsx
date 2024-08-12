import React, { Component } from 'react'

interface Props {
  count: number;
  name: string;
  onAdd: (n: number) => void;
}

interface State {
  title: string;
}

// 类子组件
class Child2 extends Component<Props, State> {

  state = {
    title: '123'
  }

  render() {
    return (
      <div className='box'>
        <h2>Child2 - {this.state.title}</h2>
        <p>父组件的count：{this.props.count}</p>
        <button onClick={() => this.props.onAdd(2)}>count +</button>
        <p>父组件name：{this.props.name}</p>
      </div>
    )
  }
}

export default Child2
