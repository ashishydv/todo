import React from 'react';
import TodoItem from './TodoItem';

function TodoList({tasks, toggleTaskStatus, deleteTask}){
    return (
        <ul className='task-list'>
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTaskStatus={toggleTaskStatus}
                />
            ) )}
        </ul>
    );
}

export default TodoList