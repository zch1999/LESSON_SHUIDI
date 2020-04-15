// let a:number = 1;
// console.log('a=',a)
import * as React from 'react';
import * as ReactDom from 'react-dom';

// import { HelloComponent } from './hello';
import { AppRouter } from './router';


// console.log(HelloComponent)
ReactDom.render(
    // <HelloComponent></HelloComponent>,
    <AppRouter></AppRouter>,
    document.getElementById('root')
)