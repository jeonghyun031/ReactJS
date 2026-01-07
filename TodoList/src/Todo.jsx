import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
    return (
        <div className="flex justify-between items-center bg-slate-800 p-4 rounded-lg hover:bg-slate-750 transition-all duration-300 border-l-4 border-primary shadow-sm hover:shadow-md mb-2">
            <p onClick={() => toggleCompleted(task.id)} className={`${task.completed ? 'text-slate-500 line-through' : 'text-slate-100'} cursor-pointer font-medium flex-grow break-all pr-4 transition-colors select-none`}>{task.task}</p>
            <div className="flex gap-4 items-center">
                <FontAwesomeIcon className="text-indigo-400 hover:text-indigo-300 cursor-pointer transition-colors text-lg" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="text-rose-500 hover:text-rose-400 cursor-pointer transition-colors text-lg" icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}
