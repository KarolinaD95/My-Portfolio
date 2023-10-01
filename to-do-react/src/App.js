import React from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="todo-app">
      <h1>Hi there!</h1>
      <h2>Start planning now and take control over your day</h2>
       <Todolist />
    </div>
  );
}

export default App;
