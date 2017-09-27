import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nabbar from './Nabbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nabbar />
          <div className="Body">

              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
              </p>
          </div>
      </div>
    );
  }
}

export default App;
