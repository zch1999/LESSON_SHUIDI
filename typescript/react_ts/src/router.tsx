import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import { App } from './app'
// import { About } from './components'
export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route path="/" component={ App }></Route>
            </div>
        </HashRouter>
    )
}