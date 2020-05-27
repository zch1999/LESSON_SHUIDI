import React from 'react'
import Context from './Context'
const { Consumer } = Context


class Link extends React.Component {
  // handleClick = (e) => {
  //   // a跳转
  //   e.preventDefault()
  //   // 组件切换出来

  // }

  render() {
    return (
      <Consumer>
        {
          ({handlepathNameChange}) => {
            return (
              <a onClick={(e) => {
                e.preventDefault()
                window.history.pushState({}, '', this.props.to);
                handlepathNameChange(this.props.to)
              }}>
                {this.props.children}
              </a>
            )
          }
        }
      </Consumer>
    )
  }
} 

export default Link