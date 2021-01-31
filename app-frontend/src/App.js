import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'


import { Provider } from "react-redux";
import store from "./redux/Store";


const App = () => {
    return (
      <Provider store={store}>
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
      </Provider>
    );
}

export default App
