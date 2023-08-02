import React, {useContext} from 'react'
import { TasklistContext } from '../Context/TaskListContext'
import Task from "./Task"

export default function TaskList() {
    const {tasks} = useContext(TasklistContext);
  return (
    <div className='con'>
        <ul className='list'>
            {tasks.map(task =>{
                return <Task task={task} key={task.id}/>;
            })}
        </ul>
    </div>
  )
}
