import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function taskCard({task}) {

    const {deleteTask, toggleTaskDone} = useTasks();
    const navigate = useNavigate();

    const handleDone = async () => {
        await toggleTaskDone(task.id)
    }

    return(
        <div className="mb-8 mx-16 grid grid-cols-3">
            <div className="flex justify-center items-center ">
                <h2 className="font-bold uppercase text-center text-2xl">{task.titulo}</h2>
                <span className="mx-8">{task.estado == 1 ? "✔️":"❌"}</span>
            </div>
            <p className="px-6 py-4 text-center bg-gray-200 rounded">{task.descripcion}</p>
            <div className="flex justify-center">
                <button className="bg-red-500 rounded border-2 border-black px-4 py-1 mx-3 hover:bg-red-700" onClick={() => {deleteTask(task.id);}}>Eliminar</button>
                <button className="bg-blue-500 rounded border-2 border-black px-4 py-1 mx-3 hover:bg-blue-700" onClick={() => {navigate(`edit/${task.id}`)}}>Editar</button>
                <button className="bg-green-500 rounded border-2 border-black px-4 py-1 mx-3 hover:bg-green-700" onClick={() => {handleDone(task.estado)}}>Marcar</button>
            </div>
        </div>
    )
}

export default taskCard;