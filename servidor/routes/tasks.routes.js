import { Router } from "express";
import { getTasks, createTask, deleteTask, getTask, updateTask } from "../controles/tasks.controller.js"

const router = Router();

router.get('/tasks', getTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)

export default router;