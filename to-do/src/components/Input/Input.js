import { useState } from "react";
import styles from './Input.module.css';

const Input = ({addToDo}) => {
    const [toDo, setToDo] = useState('');

    const handleChange = (e) => {
        setToDo(e.target.value);
    }

    return (
        <div className={styles.inputClass}>
            <input type="text" value={toDo} onChange={handleChange} defaultValue="Enter you To Do task..."  maxLength="50"></input>
            <button onClick={() => addToDo(toDo)}>Add</button>
        </div>

    )
}

export default Input;