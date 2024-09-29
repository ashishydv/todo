import React from 'react';

function TodoItem({ task,deleteTask, toggleTaskStatus }) {
  console.log('dfd');
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.text}</span>
      <div className="btn-grp">
      <button onClick={() => toggleTaskStatus(task.id)}> {task.completed ? "Mark Incomplete" : "Mark Complete"} </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
