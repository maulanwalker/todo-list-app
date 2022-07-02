import React, { useContext } from "react";
import { TodoContext } from "./Main";

const TodoItem = ({todo, index}) => {
    const { state, func } = useContext(TodoContext);
    const [, , indexUpdate,] = state;
    const [, toggleTodo, , , cancelUpdate, getTodoForUpdate, deleteTodo] = func;

    return (
        <li className="block px-6 py-3 mb-1 rounded-lg shadow-lg bg-white relative flex flex-wrap items-stretch w-full">
            <div style={{textDecoration: todo.isCompleted ? "line-through" : ""}} className="block w-4/6">
                {todo.text}
            </div>
            { index !== indexUpdate ?
                <div className="block w-2/6">
                    <button className="p-1 bg-green-500 rounded text-white" onClick={() => toggleTodo(index)} >
                        Complete
                    </button>
                    <button className="p-1 bg-sky-500 rounded text-white" onClick={() => getTodoForUpdate(index)} >
                        Update
                    </button>
                    <button className="p-1 bg-rose-500 rounded text-white" onClick={() => deleteTodo(index)} >
                        Delete
                    </button>
                </div>
                :
                <button className="p-1 bg-slate-400 rounded text-white" onClick={() => cancelUpdate()} >
                    Cancel
                </button>
            }
        </li>
    );
}

export default TodoItem;