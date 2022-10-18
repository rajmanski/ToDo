const ToDoListItem = ({item, deleteToDo}) => {
    return (
        <div>
            {item}
            <button onClick={() => deleteToDo()}>Task Done</button>
        </div>
    )
}

export default ToDoListItem;