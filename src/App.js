import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import OverviewContaner from "./containers/OverviewContainer"
import Body from "./components/Body.js"

class App extends Component {
  render() {
    return (
      <div  className='container' >
        <OverviewContaner/>
        
        <Body />
      </div>
    );
  }
}

export default App;
