import React from 'react';
import Todo from '../modals/todo';
import TodoElement from "./todoElement";

interface TodosProps {
    todos : Todo[];
}

const Todos : React.FC<TodosProps> = (props) => {
    return (
        <div>
            { props.todos.map((todo) : JSX.Element => {
                return <TodoElement id={todo.id} text={todo.text} />
            } ) }
        </div>
    );
};

export default Todos;