import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id)
    }
    return (
        <form className="w-full flex flex-col md:flex-row gap-2 mb-4" onSubmit={handleSubmit}>
            <input
                type="text"
                className="outline-none bg-slate-800 border border-slate-700 p-3 rounded-lg placeholder-slate-500 text-white w-full focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                value={value}
                placeholder="Edit the task"
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="submit"
                className="bg-secondary hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-colors duration-300 whitespace-nowrap shadow-lg hover:shadow-secondary/50"
            >
                Update
            </button>
        </form>
    )
}
