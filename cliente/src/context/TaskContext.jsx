import { createContext, useContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest ,toggleTaksDoneRequest } from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext)
    if(!context) {
        throw new Error("El useTasks deberia estar dentro del TaskContextProvider")
    }

    return context;
}

export const TaskContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        const response = await getTasksRequest()
        setTasks(response.data);
    }

    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const getTask = async (id) =>{
        try {
           const response =  await getTaskRequest(id)
           return response.data
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async (id, newFields) => {
        try {
            const response = await updateTaskRequest(id,newFields)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const toggleTaskDone = async (id) => {

        try {
            const taskfound = tasks.find((task) => task.id === id)
            await toggleTaksDoneRequest(id, taskfound.estado === 0 || taskfound.estado === null ? true : false);
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <TaskContext.Provider value={{ tasks,loadTasks,deleteTask,getTask,updateTask,toggleTaskDone }}>
            {children}
        </TaskContext.Provider>
    )
}