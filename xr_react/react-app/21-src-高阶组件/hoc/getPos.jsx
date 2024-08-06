import { Component } from "react"

function getPos(Com) {
  class Pos extends Component {

    state = {
      count: 0,
      pos: {
        x: 0,
        y: 0
      }
    }
  
    onMousemove = (e) => {
      this.setState({
        pos: {
          x: e.pageX,
          y: e.pageY
        }
      })
    }
  
    componentDidMount() {
      document.addEventListener('mousemove', this.onMousemove)
    }
  
    componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMousemove)
    }

    render() {
      return (
        // 返回的是被添加公共逻辑的组件
        // 因为添加了一层公共逻辑，相当于给子组件加了一层父级
        // 父组件传给子组件的参数接受不到，中间隔了一层公共逻辑
        // 需要将props传回给子组件
        <Com pos={this.state.pos} {...this.props}></Com>
      )
    }
  }
  return Pos
}

export default getPos
