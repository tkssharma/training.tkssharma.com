import { onError } from 'apollo-link-error';

const refreshTokenMiddlewareLink = onError(
  ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(err => {
        const extensions = err.extensions || {};
        switch (extensions.statusCode) {
          case 401:
            // eslint-disable-next-line no-case-declarations
            // const { headers } = operation.getContext();
            // operation.setContext({ headers: { ...headers, authorization: getNewToken() } });
            // return forward(operation);
            document.body.dispatchEvent(new CustomEvent('logout'));
            break;
          default:
          // return 1;
        }
      });
    }
    if (networkError) {
      // console.log(`[Network error]: ${networkError}`);
      // if you would also like to retry automatically on
      // network errors, we recommend that you use
      // apollo-link-retry
    }
  },
);

export default refreshTokenMiddlewareLink;
