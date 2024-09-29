import React, { useState, useEffect, useRef } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

function TodoApp(){
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const isFirstRendered = useRef(true);

    useEffect(() => {
        const storgeTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storgeTasks);
    }, []);

    useEffect(() => {
        if(!isFirstRendered.current) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        isFirstRendered.current = false;
    }, [tasks]);

    const addTask = (text) => {
        setTasks([
          ...tasks,
          { id: Date.now(), text: text, completed: false }
        ]);
    };

    const toggleTaskStatus = (id) => {
        
        setTasks(
          tasks.map((task) =>
            task.id == id ? { ...task, completed: !task.completed } : task
          )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    
    const filteredTasks = tasks.filter((task) => {
        if (filter == 'completed') return task.completed;
        if (filter == 'pending') return !task.completed;
        return true;
    });
  
    return (
        <div className="todo-app">
            <AddTodo addTask={addTask} />
            <Filter selectedFilter={filter} setFilter={setFilter} />
            <h1>Todo List</h1>
            <TodoList
                tasks={filteredTasks}
                toggleTaskStatus={toggleTaskStatus}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default TodoApp;