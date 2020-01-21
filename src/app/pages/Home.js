import React from 'react';
import Home from '../components/home';
import GETYOUTUBE from '../graphql/query/youtube';
import { Query } from 'react-apollo';

const HomePage = () => {
  return (
    <Query query={GETYOUTUBE} fetchPolicy="no-cache">
      {({ data, loading }) => {
        if (loading) return null;
        // in development return detail p[age even if query fails ]
        if (!data || !data.list) return null;
        return <Home data={data && data.list} />;
      }}
    </Query>
  );
};

export default HomePage;
