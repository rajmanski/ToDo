import styles from './ToDoListItem.module.css'

const ToDoListItem = ({item, deleteToDo}) => {
    return (
        <div className={styles.taskRow}>
            <span>{item}</span>
            <button onClick={() => deleteToDo()}>Task Done</button>
        </div>
    )
}

export default ToDoListItem;