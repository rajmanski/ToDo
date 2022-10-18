import './App.css';
import React from 'react';
import Input from './components/Input/Input';
import ToDoList from './components/ToDoList/ToDoList';

function App() {

  const [toDoList, setToDoList] = React.useState([]);

  const addToDo = (item) => {
    setToDoList([...toDoList, item]);
  } 

  const deleteToDo = (item) => {
    const index = toDoList.indexOf(item);
    toDoList.splice(index, 1);
    setToDoList([...toDoList]);
  }

  const deleteAll = () => {
    setToDoList([]);
  }


  return (
    <div>
      <h1>ToDo List</h1>

      <Input addToDo={addToDo}/>

      <h3>List of Your ToDo's: </h3>
      <ToDoList toDoList={toDoList} deleteToDo={deleteToDo} deleteAll={deleteAll}/>
    </div>
  );
}

export default App;
