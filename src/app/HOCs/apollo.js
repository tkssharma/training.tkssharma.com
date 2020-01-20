import React from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from 'apollo-boost';

import AuthLink from '../graphql/middleware/authLink';
import { LS_ACCESS_TOKEN_KEY } from '../constants';
import refreshTokenMiddlewareLink from '../graphql/middleware/authRetryLink';

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_SERVER_URL}/graphql`,
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  connectToDevTools: process.env !== 'production',
  cache,
  link: ApolloLink.from([AuthLink, refreshTokenMiddlewareLink, httpLink]),
  resolvers: {
    Query: {
      isLoggedIn() {
        return !!localStorage.getItem(LS_ACCESS_TOKEN_KEY);
      },
    },
  },
});

export default function Apollo({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
