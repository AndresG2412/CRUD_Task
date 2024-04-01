import { pool } from "../db.js"

export const getGroups = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM grupo");
        res.json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const getGroup = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * from tareas WHERE id = ?", [req.params.id]);

        if (result.length === 0){
            return res.status(404).json({message:"La tarea no existe"});
        }
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// req la informacion que el cliente le envia al servidor
// res la informacion que el servidor le da al cliente
export const createTask = async (req, res) => {
    try {
        const {titulo, descripcion, estado} = req.body
        const [result] = await pool.query("INSERT INTO tareas(titulo, descripcion, estado) VALUES (?,?,?)",[titulo,descripcion,estado])
        console.log(result);
        res.json({id: result.insertId,titulo,descripcion,estado});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const updateTask = async (req, res) => {
    try {
        const result = await pool.query("UPDATE tareas SET ? WHERE id = ?",[
            req.body,
            req.params.id
        ])
        res.json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const deleteTask = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM tareas WHERE id = ?", [req.params.id]);

        if (result.affectedRows === 0){
            return res.status(404).json({message:"La tarea no existe"});
        }
        
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};