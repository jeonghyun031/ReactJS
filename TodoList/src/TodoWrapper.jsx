import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm';
import { Todo } from './Todo';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    const toggleCompleted = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className="md:w-[600px] w-full mx-auto bg-dark p-8 rounded-xl shadow-2xl border border-glass ring-1 ring-white/10">
            <h1 className="text-3xl font-bold text-center mb-8 text-white tracking-widest uppercase">
                Todo List
            </h1>

            <div className="mb-8">
                <TodoForm addTodo={addTodo} />
            </div>

            <div className="flex flex-col gap-4">
                {todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm key={index} editTodo={editTask} task={todo} />
                    ) : (
                        <Todo key={index} task={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))}
                {todos.length === 0 && (
                    <p className="text-center text-slate-400 mt-4 italic">No tasks yet. Add one to get started!</p>
                )}
            </div>
        </div>
    )
}
