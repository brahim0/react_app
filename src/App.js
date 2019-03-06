import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/index';
class App extends Component {
  render() {
    return (
      <main>
<Navbar/>
      <TourList >

      </TourList>
      </main>
      
    );
  }
}

export default App;
