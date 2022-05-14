import { useState } from 'react';
import './App.css';
import Todo from "./modals/todo";
import Todos from './components/todos';
import TodoForm from './components/TodoForm';

function App() {

  const [ todos, setTodos ] = useState<Todo[]>([]); 

  function onAddTodo(text : string) : void {
    const newTodo = new Todo( Math.random(), text );

    setTodos( (prevState) => {
      return [...prevState, newTodo];
    } )
  };

  function removeTodoHandler(id : number) : void {

    setTodos((prevState) => {
      return prevState.filter( todo => todo.id !== id );
    })

  };

  return (
    <div className="App">
      <Todos todos={todos} onRemoveTodo={removeTodoHandler}/>
      <TodoForm onAddTodo={onAddTodo}/>
    </div>
  );
}

export default App;
