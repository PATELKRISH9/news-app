import './App.css';
import React, { Component } from 'react'
import Navbar from './comonets/Navbar';
import News from './comonets/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News></News>
      </div>
    )
  }
}
