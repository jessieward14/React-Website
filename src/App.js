import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}


function App() {
  
  return (
    <div className="App">
    <h1> Welcome to my app</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MyButton />
    </div>
  );
}

export default App;
