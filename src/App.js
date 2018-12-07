
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'

import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <br/><br/><br/>
          
          <h1>Joole</h1>
          <h2>Building Product Selection Platform</h2>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          </div>
      </Router>
      
    );
  }
}

export default App;
