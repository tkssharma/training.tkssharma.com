import React, { Component } from 'react';
import '../assets/styles/bootstrap.css';
import '../assets/styles/glyphicons.css';
import '../assets/styles/style.css';
import Apollo from './HOCs/apollo';
import Routes from './pages/_pages';

class App extends Component {
  render() {
    return (
      <Apollo>
        <Routes />
      </Apollo>
    );
  }
}

export default App;
