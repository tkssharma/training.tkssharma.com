import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom';

import { LS_ACCESS_TOKEN_KEY } from '../constants';
import HomePage from './Home';
import Header from '../header';
import Footer from '../footer';
import LoginPage from './Login';
import RegisterPage from './Register';

const RouterChangeCallBack = withRouter(({ callback, history }) => {
  const status = !!localStorage.getItem(LS_ACCESS_TOKEN_KEY);
  const logout = () => {
    localStorage.clear();
    // history.push('/login');
    callback(false);
  };
  useEffect(() => {
    document.body.addEventListener('logout', logout);
    return () => document.body.removeEventListener('logout', logout);
  }, []);
  callback(status);
  return '';
});

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const callback = status => {
    setIsLoggedIn(status);
  };
  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />

          <Route
            exact
            path="/login"
            render={props => <LoginPage {...props} isLoggedIn={isLoggedIn} />}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <RegisterPage {...props} isLoggedIn={isLoggedIn} />
            )}
          />
        </Switch>
        <Footer />
        <RouterChangeCallBack callback={callback} />
      </Router>
    </div>
  );
};

export default Routes;
