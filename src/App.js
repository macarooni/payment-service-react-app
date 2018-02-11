import React, { Component } from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Menu } from './Menu/Menu.js';
import './App.css';

export class App extends Component {


  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Menu/>
      </div>
    );
  }
}
