import { Form, Formik } from "formik"
import { createTaskRequest } from "../api/tasks.api";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";

function TasksForm() {

    const { getTask, updateTask } = useTasks();
    const [task, setTask] = useState({
        titulo:"",
        descripcion:""
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const loadTask = async () => {

            if(params.id){
                const task = await getTask(params.id);
                setTask({
                    titulo:task.titulo,
                    descripcion:task.descripcion
                })
            }
        }
        loadTask();
    })

    return(
        <div>

            <h1 className="text-center my-12 font-bold text-3xl uppercase">{params.id ? "Editando tarea":"Creando tarea"}</h1>
            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        if(params.id){
                            await updateTask(params.id, values)
                            navigate("/")
                        }else{
                            await createTaskRequest(values);
                            actions.resetForm();
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                {({handleChange , handleSubmit , values , isSubmitting})=>(
                    <Form onSubmit={handleSubmit}>
                        <div className="flex flex-col mx-40">
                            <label className="font-bold text-xl text-center mb-4">Titulo de la Tarea</label>
                            <input 
                                type="text" 
                                name="titulo" 
                                placeholder="Write a title" 
                                onChange={handleChange}
                                value={values.titulo}
                                className="border-black border-2 rounded mb-6 py-2 px-4"/>
                        </div>

                        <div className="flex flex-col mx-40">
                            <label className="font-bold text-xl text-center mb-4">Descripcion de la Tarea</label>
                            <textarea 
                                name="descripcion" 
                                rows="3" 
                                className="border-black border-2 rounded py-2 px-4"
                                placeholder="Write a description" 
                                onChange={handleChange}
                                value={values.descripcion}
                                ></textarea>
                        </div>

                        <div className="flex justify-center mt-8">
                            <button type="submit" disabled={isSubmitting}
                                className="bg-green-500 rounded border-2 border-black px-4 py-1 mx-3 hover:bg-green-700">
                                {isSubmitting ? "Guardando..." : "Guardar"}
                            </button>

                            <button 
                                className="bg-blue-500 rounded border-2 border-black px-4 py-1 mx-3 hover:bg-blue-700">
                                    <Link to="/">Volver</Link>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default TasksForm