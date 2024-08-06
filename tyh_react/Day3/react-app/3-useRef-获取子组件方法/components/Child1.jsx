import React, { Component } from "react";

export default class Child1 extends Component {
  state = {
    count: 0,
  };

  add = (n) => {
    this.setState({
      count: this.state.count + n,
    });
  };

  render() {
    console.log(this);
    return (
      <div style={{ border: "1px solid", padding: "20px" }}>
        <h2>Child1</h2>
        <button
          onClick={() => {
            this.add(1);
          }}
        >
          +
        </button>
        {this.state.count}
      </div>
    );
  }
}
