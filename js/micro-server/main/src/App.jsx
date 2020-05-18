import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function Pay() {
}
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/pay" component={Pay}/>
        </Switch>
      </div>
    </Router>
  );
}