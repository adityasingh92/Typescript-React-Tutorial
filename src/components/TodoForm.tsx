import React, { useRef } from "react";

function TodoForm(props : {
    onAddTodo : (text:string) => void;
}) : JSX.Element {

    const todoInputRef = useRef<HTMLInputElement>(null);

    function formSubmitHandler(event : React.FormEvent  ){
        event.preventDefault();

        const enteredText = todoInputRef.current!.value;

        if(enteredText.trim().length === 0){
            return;
        }

        props.onAddTodo(enteredText);
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