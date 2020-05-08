import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
function A() {
  const {x, y} = useMouseInfo();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  function hook() {
    let newDate = new Date()
    setDate(newDate);
    // let day = date.getDay()
    // hook内部拿到的 date 是固定 他不是 每隔一秒拿到一个新的 date
    // capture value
    // 拿到的都是当前的 state，快照一样东西
    console.log(newDate.toLocaleTimeString());
    setTime(newDate.toLocaleTimeString());
    // setTime(date.toLocaleTimeString());
  }
  // didMounted
  // 纯函数
  // Effect: 副作用： 网络 console.log Math.Random Date  ...
  // didMount
  // 运行副作用
  // useEffect hook ~~ didMount didUpdate unMount
  useEffect(() => {
    let id = setInterval(() => {
      hook()
    }, 1000)
    return () => {
      // unMount
      clearInterval(id)
    }    
  }, [])
  return (
    <div>
      time: { time }
      <br/>
      x: { x }
      y: { y }
      {/* date: {date} */}
    </div>
  )
}
function B({date}) {
  const {x, y} = useMouseInfo()
  return (
    <h2>
      x: { x }
      y: { y }
      date: {date}
    </h2>
  )
}
function WithMosuInfo(Com) {
  class WhithMouseComponent extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    componentDidMount() {
      document.addEventListener('mousemove', (e) => {
        this.setState({
          x: e.clientX,
          y: e.clientY
        })
      })
    }
    render() {
      const props = this.props;
      return (<Com x={this.state.x} y={this.state.y}
       {...props} />)
    }
  }
  return WhithMouseComponent
}
// 内置hook：useState useEffect useCallback ...
// 自定义hook: xxx   解决逻辑复用
function foo() {
  let x =10, y = 10
  return {
    x,
    y
  }
}
function useMouseInfo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // didMonted
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setX(e.clientX);
      setY(e.clientY);
    })
  }, [])  // [] hook 依赖
  return {
    x,
    y
  }
}
// 当前坐标
// 包装地狱
// <Com date={this.state.date}/>
// (<Com x={this.state.x} y={this.state.y}/>)
// 不会自动合并
// const Amouse =  WithMosuInfo(WithTime(A));
// const Bmouse =  WithMosuInfo(WithTime(B));
function WithTime(Com) {
  class WithTimeCom extends React.Component {
    state = {
      date: new Date().toLocaleTimeString()
    }
    render() {
      const props = this.props;
      return (<Com date={this.state.date} {...props}/>)
    }
  }
  return WithTimeCom;
}
function App() {
  return (
    <div className="App">
     <A />
     <B />
    </div>
  );
}

export default App;
