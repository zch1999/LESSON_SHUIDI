import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// electron调用 NativeAPI  多进程架构
// Inter-Process Communication，进程间通信 
// electron 不支持import  
// create-react-app  0配置启动 reject 


import { ipcRenderer, remote } from 'electron'; // 去到IPC 
const { Menu, MenuItem } = remote;
function App() {
  useEffect(() => {


  });
  const handleContextMenu = (e) => {
    e.preventDefault();
    const menu = new Menu();
    menu.append(new MenuItem({
      label: '复制',
      role: 'copy'
    }))
    menu.append(new MenuItem({
      label: '分享到微信',
      click: (menuItem, win, keyboardEvent) => {
        ipcRenderer.send('share-to-wechat', '123123')
      }
    }))
    menu.popup()
  }
  return (
    <div className="App">
        {/* <h1 onContextMenu={(e) =>handleContextMenu(e)}>Hello World!</h1> */}
        {
          controlText
        }
    </div>
  );
}


export default App;

