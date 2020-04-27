// import "./app.css";
// console.log('welcome');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { HelloComponent } from './hello';
import { AppRouter } from './router'

const [name,setName] = React.useState('defaultUserName');

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
)