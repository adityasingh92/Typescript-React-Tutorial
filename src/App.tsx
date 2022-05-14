import React from 'react';
import './App.css';
import Todo from "./modals/todo";
import Todos from './components/todos';

function App() {

  const todos = [
    new Todo(1, 'Learn React Typescript'),
    new Todo(2, 'Learn NestJS'),
    new Todo(3, 'Learn Ionic')
  ];

  return (
    <div className="App">
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
