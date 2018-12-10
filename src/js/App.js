import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this is logo
          </p>

        </header>
      </div>
    );
  }
}

export default App;
