import { useEffect } from "react";
import TaskCard from "../components/taskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage(){
    const { tasks,loadTasks } = useTasks();

    useEffect(() => {
        loadTasks();
    }); 

    function renderMain() {

        if (tasks.length === 0) return <h1 className="text-center font-bold">No hay tareas</h1>

        return tasks.map((task) => (
            <TaskCard task={task} key={task.id}/>
        ))
    }

    return(
        <div>
            <h2 className="text-center my-12 font-bold text-3xl uppercase">lista de tareas pendientes</h2>

            {renderMain()}
        </div>
    );
}

export default TasksPage