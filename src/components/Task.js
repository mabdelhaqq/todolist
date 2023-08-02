import React , {useContext} from 'react'
import { TasklistContext } from '../Context/TaskListContext';

export default function Task({task}) {

  const {removeTask , updateTaskStatus}= useContext(TasklistContext);

  const handleCheckboxChange = () => {
    updateTaskStatus(task.id, !task.status);
  };

  return (
    <li className="list-item">
        <input type='checkbox' className='done' checked={task.status} onChange={handleCheckboxChange}/>
        <span className={`${task.status ? 'completed' : ''}`}>{task.title}</span>
        <button className='dlt-btn' onClick={()=>{removeTask(task.id)}}>Delete Task</button>
    </li>
  );
};
