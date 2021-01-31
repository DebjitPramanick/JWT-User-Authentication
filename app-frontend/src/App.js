import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'

const App = () => {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App
