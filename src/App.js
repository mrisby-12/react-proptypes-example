import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import './Button.css';

const primaryStyle = {
  backgroundColor: '#1890ff',
  color: '#fff',
  border: '1px solid #1890ff',
};

const defaultStyle = {
  backgroundColor: '#fff',
  color: '#516373',
  border: '1px solid #E2E9EF'
}

const dashedStyle = {
  backgroundColor: '#fff',
  color: '#516373',
  border: '1px dashed #e2e9ef'
}

const dangerStyle = {
  backgroundColor: '#f5f5f5',
  color: 'red',
  border: '1px solid #d9d9d9'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button style={ primaryStyle }> Primary </Button>
        <Button style={ defaultStyle }> Default </Button>
        <Button style={ dashedStyle }> Dashed </Button>
        <Button style={ dangerStyle }> Danger </Button>        
      </div>
    );
  }
}

export default App;
