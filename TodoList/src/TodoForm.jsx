import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue("");
        }
    }
    return (
        <form className="w-full flex flex-col md:flex-row gap-2" onSubmit={handleSubmit}>
            <input
                type="text"
                className="outline-none bg-slate-800 border border-slate-700 p-3 rounded-lg placeholder-slate-500 text-white w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 shadow-inner"
                value={value}
                placeholder="What is the task today?"
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="submit"
                className="bg-primary hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-colors duration-300 whitespace-nowrap shadow-lg hover:shadow-primary/50"
            >
                Add Task
            </button>
        </form>
    )
}
