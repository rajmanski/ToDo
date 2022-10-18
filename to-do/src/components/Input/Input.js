import { useState } from "react";

const Input = ({addToDo}) => {
    const [toDo, setToDo] = useState('');

    const handleChange = (e) => {
        setToDo(e.target.value);
    }

    return (
        <div>
            <input type="text" value={toDo} onChange={handleChange} ></input>
            <button onClick={() => addToDo(toDo)}>Tutaj jest button</button>
        </div>

    )
}

export default Input;