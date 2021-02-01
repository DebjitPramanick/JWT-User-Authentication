import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'


import { Provider } from "react-redux";
import store from "./redux/Store";
import Dashboard from './components/Dashboard/Dashboard';

import {loadUser} from "./redux/actions/auth"
import setToken from './redux/setToken';


if(localStorage.getItem('token')){
  setToken(localStorage.getItem('token'));
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])



    return (
      <Provider store={store}>
        <div>
          <Router>
            <Switch>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
}

export default App
