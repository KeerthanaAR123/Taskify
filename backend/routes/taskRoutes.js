import express from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

// CRUD Routes
router.post('/', createTask);              // POST /api/tasks - Create task
router.get('/', getAllTasks);              // GET /api/tasks - Get all tasks
router.get('/:id', getTaskById);           // GET /api/tasks/:id - Get task by ID
router.put('/:id', updateTask);            // PUT /api/tasks/:id - Update task
router.delete('/:id', deleteTask);         // DELETE /api/tasks/:id - Delete task

export default router;
