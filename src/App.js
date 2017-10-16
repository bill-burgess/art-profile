import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router'

import NavBar from './components/NavBar'

class App extends Component {
  render() {
    console.log('test');
    return (
      <div className='App'>
        <NavBar />
        <div className="children">
        </div>
      </div>
    );
  }
}

export default App;
