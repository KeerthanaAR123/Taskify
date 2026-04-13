import React, { useState, useEffect } from 'react';
import { taskAPI } from '../api/taskAPI';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import '../styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await taskAPI.getAllTasks();
      setTasks(response.data.data || []);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Failed to fetch tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle create task
  const handleCreateTask = async (taskData) => {
    try {
      const response = await taskAPI.createTask(taskData);
      setTasks([response.data.data, ...tasks]);
      setError(null);
    } catch (err) {
      console.error('Error creating task:', err);
      setError('Failed to create task. Please try again.');
    }
  };

  // Handle update task
  const handleUpdateTask = async (id, taskData) => {
    try {
      const response = await taskAPI.updateTask(id, taskData);
      setTasks(tasks.map(task => task._id === id ? response.data.data : task));
      setEditingTask(null);
      setError(null);
    } catch (err) {
      console.error('Error updating task:', err);
      setError('Failed to update task. Please try again.');
    }
  };

  // Handle delete task
  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskAPI.deleteTask(id);
        setTasks(tasks.filter(task => task._id !== id));
        setError(null);
      } catch (err) {
        console.error('Error deleting task:', err);
        setError('Failed to delete task. Please try again.');
      }
    }
  };

  // Filter tasks
  const getFilteredTasks = () => {
    if (filter === 'all') return tasks;
    return tasks.filter(task => task.status === filter);
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="app">
      <header className="app-header">
        <h1>📋 Taskify</h1>
        <p>Your Personal Task Manager</p>
      </header>

      <div className="app-container">
        <div className="form-section">
          <TaskForm
            onSubmit={editingTask ? (data) => handleUpdateTask(editingTask._id, data) : handleCreateTask}
            editingTask={editingTask}
            onCancel={() => setEditingTask(null)}
          />
        </div>

        <div className="tasks-section">
          {error && <div className="error-message">{error}</div>}

          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({tasks.length})
            </button>
            <button
              className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              Pending ({tasks.filter(t => t.status === 'pending').length})
            </button>
            <button
              className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`}
              onClick={() => setFilter('in-progress')}
            >
              In Progress ({tasks.filter(t => t.status === 'in-progress').length})
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed ({tasks.filter(t => t.status === 'completed').length})
            </button>
          </div>

          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : filteredTasks.length === 0 ? (
            <div className="no-tasks">
              {filter === 'all' ? 'No tasks yet. Create one to get started!' : `No ${filter} tasks.`}
            </div>
          ) : (
            <TaskList
              tasks={filteredTasks}
              onEdit={setEditingTask}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
