import React from 'react';
import '../styles/TaskItem.css';

function TaskItem({ task, onEdit, onDelete, onUpdate }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getPriorityClass = (priority) => {
    return `priority-${priority}`;
  };

  const getStatusClass = (status) => {
    return `status-${status}`;
  };

  const handleStatusChange = (newStatus) => {
    onUpdate(task._id, { ...task, status: newStatus });
  };

  return (
    <div className={`task-item ${getStatusClass(task.status)}`}>
      <div className="task-header">
        <div className="task-title-section">
          <h3 className="task-title">{task.title}</h3>
          <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
            {task.priority.toUpperCase()}
          </span>
        </div>
        <div className="task-actions">
          <button onClick={() => onEdit(task)} className="btn-edit" title="Edit task">
            ✏️
          </button>
          <button onClick={() => onDelete(task._id)} className="btn-delete" title="Delete task">
            🗑️
          </button>
        </div>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-footer">
        <span className="task-date">📅 {formatDate(task.dueDate)}</span>

        <div className="status-buttons">
          {['pending', 'in-progress', 'completed'].map(status => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`status-btn ${task.status === status ? 'active' : ''}`}
              title={`Mark as ${status}`}
            >
              {status === 'pending' && '⭕'}
              {status === 'in-progress' && '🔄'}
              {status === 'completed' && '✅'}
              {' ' + status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="task-meta">
        <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
      </div>
    </div>
  );
}

export default TaskItem;
