import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  console.log('On the date this app was created, ');
  console.log('I finished the alternative solution to ');
  console.log('the last required lab due this week. ');
  console.log('');
  console.log('Also attended and participated in class');
  console.log(' today.');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
