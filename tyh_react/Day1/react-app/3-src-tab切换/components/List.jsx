import { Component } from "react";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.songs.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    );
  }
}

export default List;
