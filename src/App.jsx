import { useState } from 'react'
import './index.css'

const ToDoList = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    "Skills Project",
    "Play Basketball",
    "Read Hunger Games",
  ]);

  const handleInputChange = (e) => {
      setNewTask(e.target.value);
  }

  const handleAddTask = () => {
    if(newTask.trim() !== ""){
      setTasks(t => [...t, newTask])
      setNewTask("")
    }
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const moveTaskUp = (index) => {
    if(index > 0){
      const updatedTasks = [...tasks];
      /* 
      [updatedTasks[1] = "Eat Breakfast", updatedTasks[2] = "Play Video Games"] = 
      [updatedTasks[2] = "Play Video Games", updatedTasks[1] = "Eat Breakfast"]
      */
     [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
     setTasks(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index +1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>
        To Do List
      </h1>
      <input 
        type="text" 
        placeholder="Enter task..."
        value={newTask} 
        onChange={handleInputChange} />
        <button
        onClick={handleAddTask}
        >Add</button>
        <ol>
          {
            tasks.map((task, i) => (
              <li key={i} >
                <span className="text">{task}</span>
                <button
                onClick={() => handleDeleteTask(i)}
                className="delete-button">
                  X
                </button>
                <button
                onClick={() => moveTaskUp(i)}
                className="move-button">
                  👆🏻
                </button>
                <button
                onClick={() => moveTaskDown(i)}
                className="move-button">
                  👇🏻
                </button>
              </li>
            ))
          }
        </ol>
    </div>
  )
}

export default ToDoList