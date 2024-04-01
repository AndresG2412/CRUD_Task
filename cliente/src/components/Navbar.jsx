import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="bg-black text-white">
            <h1 className="text-3xl text-center font-bold pt-8">Administrador de Tareas</h1>

            <ul className="flex justify-center">
                <li className="mx-8 my-6 hover:text-red-500">
                    <Link to="/">Tareas Pendientes</Link>
                </li>
                <li className="mx-8 my-6 hover:text-red-500">
                    <Link to="/form">Crear Tarea</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;