import React, { useState, useContext } from 'react';
import Login from '../components/login';
import loginQuery from '../graphql/query/login';
import { ApolloContext } from 'react-apollo';
import { LS_ACCESS_TOKEN_KEY } from '../constants';
const LoginPage = ({ history, isLoggedIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { client } = useContext(ApolloContext);
  if (isLoggedIn) {
    history.push('/home');
  }
  function onLoginError(
    { graphQLErrors, networkError } = { networkError: 'Something went wrong!' },
  ) {
    if (networkError) {
      setError('Something went wrong!');
      setIsLoading(false);
      return;
    }
    const [firstError] = graphQLErrors;
    setError(firstError.message);
    setIsLoading(false);
  }
  function onLogin({ email, password }) {
    setIsLoading(true);
    client
      .mutate({
        fetchPolicy: 'no-cache',
        mutation: loginQuery,
        variables: {
          email,
          password,
        },
      })
      .then(({ data }) => onLoginResponse(data))
      .catch(onLoginError);
  }
  const onLoginResponse = data => {
    const response = data && data.loginData;
    localStorage.setItem(LS_ACCESS_TOKEN_KEY, response.token);
    history.push('/');
    // data
  };
  return <Login onSubmit={onLogin} isLoading={isLoading} error={error} />;
};

export default LoginPage;
