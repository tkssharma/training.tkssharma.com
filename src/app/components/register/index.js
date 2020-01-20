import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onSubmit, isLoading, error }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    username: false,
  });

  function hasErrors() {
    if (
      (email.trim().length === 0 && password.trim().length === 0,
      username.trim().length === 0)
    ) {
      setErrors({ email: true, password: true, username: true });
      return true;
    }
    if (email.trim().length === 0) {
      setErrors({ email: true });
      return true;
    }
    if (password.trim().length === 0) {
      setErrors({ password: true });
      return true;
    }
    if (username.trim().length === 0) {
      setErrors({ username: true });
      return true;
    }
    return false;
  }
  function resetErrors() {
    setErrors({ email: false, password: false, username: false });
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
    resetErrors();
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
    resetErrors();
  }
  function onUsernameChange(event) {
    setUsername(event.target.value);
    resetErrors();
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (hasErrors()) {
      return;
    }
    onSubmit({
      email: email.trim(),
      username: username.trim(),
      password: password.trim(),
    });
  }
  function onKeyPress(event) {
    if (event && event.charCode === 13) {
      onFormSubmit(event);
    }
  }
  return (
    <section className="section">
      <div className="container">
        <div className="title-subtitle-block">
          <h2 className="title">Create New Account</h2>
        </div>
        <div className="narrow-form-holder sign-form-holder">
          <div>
            <form
              className=" form row col-md-12"
              role="form"
              onSubmit={onFormSubmit}
              noValidate
              name="loginform"
              acceptCharset="UTF-8"
              id="login-nav"
            >
              <div className="error-messages">{error}</div>
              <div className="form-group email optional user_email">
                <label
                  className="email optional control-label"
                  htmlFor="user_email"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  value={email}
                  onChange={onEmailChange}
                  onKeyPress={onKeyPress}
                  disabled={isLoading}
                  placeholder="Email address"
                />
                <span className="error-messages">
                  {errors.email && 'Required'}
                </span>
              </div>
              <div className="form-group email optional user_email">
                <label
                  className="email optional control-label"
                  htmlFor="user_name"
                >
                  Username
                </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  value={username}
                  onChange={onUsernameChange}
                  onKeyPress={onKeyPress}
                  disabled={isLoading}
                  placeholder="username"
                />
                <span className="error-messages">
                  {errors.username && 'Required'}
                </span>
              </div>
              <div className="form-group password optional user_password">
                <label
                  className="password optional control-label"
                  htmlFor="user_password"
                >
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={onPasswordChange}
                  onKeyPress={onKeyPress}
                  disabled={isLoading}
                  name="password"
                  id="password"
                />
                <span className="error-messages">
                  {errors.password && 'Required'}
                </span>
              </div>
              <div className="form-group">
                <div className="checkbox custom-checkbox">
                  <label>
                    <span className="icon-holder">
                      <input
                        className="optional"
                        id="user_remember_me"
                        name="user[remember_me]"
                        type="checkbox"
                        value="1"
                      />{' '}
                    </span>
                  </label>
                </div>
              </div>
              <div className="form-group flexbox-between">
                <input
                  className="btn btn custom-btn custom-btn-secondary custom-btn-blue"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div className="form-group text-center">
                Already have account?{' '}
                <Link className="underlined action" to="/login">
                  Sign In
                </Link>
              </div>
              <div className="form-group text-center">
                Forgot your password?{' '}
                <a className="underlined action" href="#!/password">
                  Recover it
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
