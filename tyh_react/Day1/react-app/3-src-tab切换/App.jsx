import { Component } from "react";
import List from "./components/List";
import NavList from "./components/NavList";

class App extends Component {
  state = {
    curIndex: 0,
    tablist: [
      { name: "周杰伦", songs: ["晴天", "稻香", "双节棍", "龙拳"] },
      { name: "薛之谦", songs: ["意外", "丑八怪", "演员", "天外来物"] },
      { name: "李荣浩", songs: ["模特", "李白", "老街", "年少有为"] },
    ],
  };

  changeIndex = (i) => {
    this.setState({
      curIndex: i,
    });
  };

  render() {
    const { tablist, curIndex } = this.state;
    return (
      <div>
        <NavList
          tablist={tablist}
          curIndex={curIndex}
          changeIndex={this.changeIndex}
        />
        <List songs={tablist[curIndex].songs} />
      </div>
    );
  }
}

export default App;
