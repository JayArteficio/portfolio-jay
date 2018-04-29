import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase';
import { DB_CONFIG } from './Config';

class App extends Component {
  constructor() {
    super();
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('projects');
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.database.on('value', snap => {
      this.setState({
        projects: snap.val(),
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
          <h4>What's up?</h4>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
