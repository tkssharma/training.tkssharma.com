import React, { useState, useContext } from 'react';
import Register from '../components/register';
import registerQuery from '../graphql/query/register';
import { ApolloContext } from 'react-apollo';

const LoginPage = ({ history, isLoggedIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { client } = useContext(ApolloContext);
  if (isLoggedIn) {
    history.push('/home');
  }
  function onRegisterError(
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
  function onRegister({ email, password, username }) {
    setIsLoading(true);
    client
      .mutate({
        fetchPolicy: 'no-cache',
        mutation: registerQuery,
        variables: {
          email,
          username,
          password,
        },
      })
      .then(({ data }) => onRegisterResponse(data))
      .catch(onRegisterError);
  }
  const onRegisterResponse = () => {
    history.push('/login');
  };
  return <Register onSubmit={onRegister} isLoading={isLoading} error={error} />;
};

export default LoginPage;
