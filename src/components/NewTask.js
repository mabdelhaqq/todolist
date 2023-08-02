import React, {useContext , useState} from 'react'
import { TasklistContext } from '../Context/TaskListContext'

export default function NewTask() {
    const {addTask}= useContext(TasklistContext);

    const[title, setTitle]= useState('');

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTask(title);
        setTitle("");
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="in">Add Task : </label>
        <input id="in" type="text" placeholder='Write a new task here...'
         required onChange={handleChange} value={title}/>
        <button type='submit'>Add Task</button>
    </form>
  )
}
