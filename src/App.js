import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <div className="column">
        <Counter />
      </div>
      <div className="column">
        <Login />
      </div>
    </div>
  );
}

export default App;
