import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Login from './pages/login'
import HomePage from './pages/home/HomePage'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={HomePage}/>
      </Router>
    );
  }
}

export default App;