import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Task API calls
export const taskAPI = {
  // Create task
  createTask: (taskData) => api.post('/tasks', taskData),

  // Get all tasks
  getAllTasks: () => api.get('/tasks'),

  // Get task by ID
  getTaskById: (id) => api.get(`/tasks/${id}`),

  // Update task
  updateTask: (id, taskData) => api.put(`/tasks/${id}`, taskData),

  // Delete task
  deleteTask: (id) => api.delete(`/tasks/${id}`)
};

export default api;
