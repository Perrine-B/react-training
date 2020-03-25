import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Button from './components/Button';
import Nav from './features/nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav></Nav>
        
       
      </header>
        <Button></Button>
    </div>
  );
}

export default App;
