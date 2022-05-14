function TodoElement(props : {
    id : number;
    text : string;
    onRemoveTodo : (id : number) => void
}) : JSX.Element {
    return <li key={props.id}>{props.text}</li>;
};

export default TodoElement;