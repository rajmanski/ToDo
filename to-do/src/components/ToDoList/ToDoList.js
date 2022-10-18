import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = ({toDoList, deleteToDo, deleteAll}) => {
    return (
        <div>
            <button onClick={() => deleteAll()}>Click to delte all ToDo's...</button>
            {toDoList.map((item) => (
                <ToDoListItem item={item} deleteToDo={deleteToDo} />
            ))}
        </div>
    )
}

export default ToDoList;