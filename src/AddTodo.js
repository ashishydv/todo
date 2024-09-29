import React, { useState } from 'react';

function AddTodo({ addTask }) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let value = todoText.trim();

    if(value){
        addTask(todoText);
        setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter task."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodo;
