function TodoElement(props : {
    id : number;
    text : string;
}) : JSX.Element {
    return <li key={props.id}>{props.text}</li>;
};

export default TodoElement;