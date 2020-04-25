import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ApolloContext } from 'react-apollo';
import getUser from './graphql/query/user';
import { getUserDataFromLS } from './pages/utils';
import { LS_USER_DATA } from './constants';

const Header = ({ isLoggedIn }) => {
  const { client } = useContext(ApolloContext);
  const [user, setUser] = useState({});

  const getUserData = async isLoggedIn => {
    const user = getUserDataFromLS();
    if (user && user.username && isLoggedIn) {
      setUser(user);
    } else if (isLoggedIn) {
      try {
        const data = await client.query({
          query: getUser,
          fetchPolicy: 'no-cache',
        });
        if (data && data.data) {
          setUser(data.data && data.data.user);
          localStorage.setItem(LS_USER_DATA, JSON.stringify(data.data.user));
          return;
        }
        throw new Error('No data');
      } catch (e) {
        console.log(e);
      }
    } else {
      setUser(null);
    }
  };
  const logout = () => {
    setTimeout(() => {
      document.body.dispatchEvent(new CustomEvent('logout'));
    }, 1000);
  };

  useEffect(() => {
    getUserData(isLoggedIn);
    return () => null;
  }, [isLoggedIn]);

  return (
    <header>
      <nav role="navigation" className="navbar header-navigation-holder">
        <div className="container">
          <div className="navbar-header">
            <button
              data-target="#header-navigation"
              data-toggle="collapse"
              className="navbar-toggle header-navigation-toggle"
              type="button"
            >
              <i className="icon-reorder" />
            </button>
            <Link to="/" className="navbar-brand logo">
              Training Portal
            </Link>
          </div>

          <div
            id="header-navigation"
            className="collapse navbar-collapse header-navigation"
          >
            <ul className="nav navbar-nav header-navigation-list">
              <li className="dropdown">
                <Link to="/" data-toggle="dropdown" className="dropdown-toggle">
                  Learnings <b className="caret" />
                </Link>
                <ul className="dropdown-menu">
                  <li className="semi-bold">
                    <a href="#/all">All</a>
                  </li>
                  <li>
                    <a href="#/web/angular2">Angular 2.0</a>
                  </li>
                  <li>
                    <a href="#/web/angular">AngularJS</a>
                  </li>
                  <li>
                    <a href="#/common/git">Git</a>
                  </li>
                  <li>
                    <a href="#/web/js">Java script V8</a>
                  </li>
                  <li>
                    <a href="#/web/grunt">Grunt</a>
                  </li>
                  <li>
                    <a href="#/web/js">JavaScript</a>
                  </li>
                  <li>
                    <a href="#/java/java8">Java</a>
                  </li>
                  <li>
                    <a href="#/web/node">Node.js</a>
                  </li>
                  <li>
                    <a href="#/java/j2ee">J2EE</a>
                  </li>
                  <li>
                    <a href="#/mobile/android">Mobile Android</a>
                  </li>
                  <li>
                    <a href="#/web/build">gulp/NPM/Yoman</a>
                  </li>
                </ul>
              </li>
              <li className="hidden-sm">
                <Link to="/learn/training">Trainings</Link>
              </li>
              <li className="hidden-sm">
                <Link to="/learn/webcast">Screencast</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right header-navigation-list">
              {user && user.username ? (
                <Fragment>
                  <li>
                    <Link to="/login">{user.username}</Link>
                  </li>
                  <li>
                    <a href="#" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </Fragment>
              ) : (
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
