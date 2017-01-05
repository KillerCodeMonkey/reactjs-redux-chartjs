import React, { Component } from 'react';
import Calculation from '../containers/Calculation';
import AddValue from '../containers/AddValue';
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
        <div style={{
          width: "40%",
          float: "left"
        }}>
          <Calculation></Calculation>
        </div>
        <div>
          <AddValue label="add" action="addCost" heading="Add a new cost"></AddValue>
          <AddValue label="add" action="addIncome" heading="Add a new income"></AddValue>
          <AddValue label="add" action="addSaving" heading="Add a new saving"></AddValue>
        </div>
        <div style={{
          clear: "both"
        }}></div>
      </div>
    );
  }
}

export default App;
