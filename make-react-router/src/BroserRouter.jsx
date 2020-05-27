import React from 'react'
import Context from './Context'
//provider 生产者 可以把xx变成全局变量
//Consumer 消费者 把xx取下来
const  { Provider, Consumer } = Context
// 匹配当前的浏览器url 和当前的
// path 这个prop能不能匹陪上，匹配上就展示出来
// history 当前浏览器地址 告诉所有Route组件
class BrowserRouter extends React.Component {
  handlepathNameChange = (pathname) => {
    console.log(pathname)
    const history = this.state.history
    window.history
    this.setState({
      history: {
        ...history,
        pathname
      }
    })
  }
  state = {
    history: {
      location: window.location,
      pathname: window.location.pathname,
      handlepathNameChange: this.handlepathNameChange
    }
  }


  render() {
    return (
      <Provider value={{...this.state.history}}>
        {this.props.children}
      </Provider>
    )
  }
}

export default BrowserRouter