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
                    { !todo.isCompleted ?
                    <div>
                        <button className="py-1 px-4 bg-green-600 rounded text-white" onClick={() => toggleTodo(index)} >
                            Completed
                        </button> 
                        <button className="py-1 px-4 bg-sky-600 rounded text-white" onClick={() => getTodoForUpdate(index)} >
                            Update
                        </button> 
                        <button className="py-1 px-4 bg-rose-400 rounded text-white" disabled onClick={() => deleteTodo(index)} >
                            Delete
                        </button>
                    </div>:
                    <div>
                        <button className="py-1 px-4 bg-green-600 rounded text-white" onClick={() => toggleTodo(index)} >
                            Undo
                        </button>
                        <button className="py-1 px-4 bg-sky-400 rounded text-white" disabled onClick={() => getTodoForUpdate(index)} >
                            Update
                        </button>
                        <button className="py-1 px-4 bg-rose-600 rounded text-white" onClick={() => deleteTodo(index)} >
                            Delete
                        </button>
                    </div>
                    }
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