//import logo from './logo.svg';
import TodoList from './TodoList'
import PiggyBank from './PiggyBank'
import './App.css';
import React, { useState } from 'react'

function App() {
  const [cash,setCash] = useState(0)

  const depositCash = () => {
    setCash(cash+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List App</h1>
        <PiggyBank amount={cash} />
        <TodoList depositCash={depositCash} />
      </header>
    </div>
  );
}

export default App;
