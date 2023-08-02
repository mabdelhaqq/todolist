import React, {useState, createContext, useEffect} from "react";

export const TasklistContext = createContext();

const TaskListContextProvider = (props) =>{

    const initialState= JSON.parse(localStorage.getItem("tasks"))||[];

    const [tasks, setTasks]= useState(initialState);

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));}
        ,[tasks]);

    const addTask = (title) => {
        setTasks([...tasks, { title, id: Date.now(), status: false }]);
        };

    const removeTask= (id)=> {
        setTasks(tasks.filter(task=>task.id !== id))
    }

    const updateTaskStatus = (id, status) => {
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, status } : task
        );
        setTasks(updatedTasks);
      };
    return <TasklistContext.Provider value={{tasks, addTask, removeTask, updateTaskStatus}}>
        {props.children}
    </TasklistContext.Provider>
};

export default TaskListContextProvider;