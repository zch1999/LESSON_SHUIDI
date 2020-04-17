import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import { App } from './app'
import { About,MembersPage } from './components'
// import { About } from './components'
export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route path="/" component={ App }></Route>
                <Switch>
                    <Route path="/" exact component={ About }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/members" component={ MembersPage }/>
                </Switch>
            </div>
        </HashRouter>
    )
}