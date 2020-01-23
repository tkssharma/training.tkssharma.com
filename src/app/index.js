import React, { Component } from 'react';
import '../assets/styles/bootstrap.css';
import '../assets/styles/glyphicons.css';
import '../assets/styles/style.css';
import Apollo from './HOCs/apollo';
import Routes from './pages/_pages';
import { ApolloNetworkStatusProvider } from 'react-apollo-network-status';

class App extends Component {
  render() {
    return (
      <Apollo>
        <ApolloNetworkStatusProvider>
          <Routes />
        </ApolloNetworkStatusProvider>
      </Apollo>
    );
  }
}

export default App;
