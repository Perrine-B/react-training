import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Nav from './features/nav/Nav';
import Results from './features/results/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav></Nav>
      </header>
        <Results></Results>
    </div>
  );
}

export default App;
