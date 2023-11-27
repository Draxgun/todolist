import { useState } from 'react';
import './App.css';
import { Task } from "./Task"

function App() {

  let [todoList, setTodoList] = useState([]);
  let [newTask,setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(newTask = event.target.value);
  }

  const addTask  = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
      completed: false,
    }
    
    const newTodoList = [...todoList, task];
    console.log(newTodoList)
    setTodoList(todoList = newTodoList);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id)
    setTodoList(todoList = newTodoList);
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  
  return (
    <div className="App">

    <div className='addTask'>
      <input onChange={handleChange}></input>
      <button onClick={addTask}>Add Task</button>
    </div>

    <div className='list'>
    {todoList.map((task) => {
        return <Task taskName = {task.taskName}  id = {task.id} deleteTask = {deleteTask} completeTask ={completeTask} completed = {task.completed}></Task>})}
    </div>
  
  </div>)
}


export default App;
