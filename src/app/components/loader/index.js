import React from 'react';
import { useApolloNetworkStatus } from 'react-apollo-network-status';
import './loadin.scss';

export const Loading = ({ progress }) => {
  if (progress) {
    return (
      <div className="page-loading">
        <img src="img/loading.gif" className="ajax-loader" />
      </div>
    );
  } else {
    return null;
  }
};

const GlobalLoadingIndicator = () => {
  const status = useApolloNetworkStatus();
  const { numPendingQueries, numPendingMutations } = status;
  if (numPendingQueries > 0 || numPendingMutations > 0) {
    return <Loading progress={true} />;
  } else {
    return <Loading progress={false} />;
  }
};

export default GlobalLoadingIndicator;
