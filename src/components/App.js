import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
      
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ACME</h2>
        </div>
        <p className="App-intro">
            A playground with React.JS, React Redux and Chart.js!
        </p>
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/about/123" activeClassName="active">About us</Link>
        </nav>
        { this.props.children }
      </div>
    );
  }
}

export default App;
