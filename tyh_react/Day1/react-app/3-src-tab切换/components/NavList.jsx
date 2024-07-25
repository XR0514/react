import { Component } from "react";

class NavList extends Component {
  render() {
    const { tablist, curIndex, changeIndex } = this.props;
    return (
      <nav>
        {tablist.map((item, index) => (
          <span
            className={curIndex === index ? "active" : ""}
            key={item.name}
            onClick={() => changeIndex(index)}
          >
            {item.name}
          </span>
        ))}
      </nav>
    );
  }
}

export default NavList;
