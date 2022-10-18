import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = ({toDoList, deleteToDo}) => {
    return (
        toDoList.map((item) => (
            <ToDoListItem item={item} deleteToDo={deleteToDo} />
        ))
    )
}

export default ToDoList;