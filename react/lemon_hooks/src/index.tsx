// import "./app.css";
// console.log('welcome');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { HelloComponent } from './hello';
import { App } from './app'

const [name,setName] = React.useState('defaultUserName');

ReactDOM.render(
  <App />,
  document.getElementById('root')
)