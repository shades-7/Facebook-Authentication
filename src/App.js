import React from 'react';
import './App.css';
import Facebook from './Components/Facebook'


function App() {
  return (
    <div className="App">
    <h1 className="App-title">Facebook Auth Example</h1>
    <p className="App-intro">To get started, authenticate with Facebook.</p>
      <Facebook />
    </div>
  );
}

export default App;
