import { ApolloLink } from 'apollo-boost';
import { LS_ACCESS_TOKEN_KEY } from '../../constants/';

const AuthLink = new ApolloLink((operation, forward) => {
  const accessToken = localStorage.getItem(LS_ACCESS_TOKEN_KEY);
  const context = operation.getContext();
  if (context.headers && context.headers['X-AUTH-TOKEN']) {
    return forward(operation);
  }
  operation.setContext({
    headers: {
      Authorization: accessToken || null,
    },
  });
  return forward(operation);
});
export default AuthLink;
