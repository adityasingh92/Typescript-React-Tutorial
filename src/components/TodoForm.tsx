import React, { useRef } from "react";

function TodoForm() : JSX.Element {

    const todoInputRef = useRef<HTMLInputElement>(null);

    function formSubmitHandler(event : React.FormEvent  ){
        event.preventDefault();
    }

    return (
        <form onSubmit={ formSubmitHandler }>
            <label htmlFor="inputTodo">Todo Text</label>
            <input id="inputTodo" type='text' ref={todoInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};


export default TodoForm;