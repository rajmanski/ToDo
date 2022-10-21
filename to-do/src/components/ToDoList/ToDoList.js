import ToDoListItem from "../ToDoListItem/ToDoListItem";
import styles from './ToDoList.module.css'

const ToDoList = ({toDoList, deleteToDo, deleteAll}) => {
    return (
        <div className={styles.task}>
            
            {toDoList.map((item) => (
                <ToDoListItem item={item} deleteToDo={deleteToDo} />
            ))}
            {toDoList.length > 0 && (
                <button onClick={() => deleteAll()}>Click to delte all ToDo's...</button>
            )}
            
        </div>
    )
}

export default ToDoList;