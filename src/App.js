import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Login from './pages/login'
import List from './pages/academyList'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/list" exact component={List}/>
      </Router>
    );
  }
}

export default App;