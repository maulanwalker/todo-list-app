import React from "react";

const TodoItem = ({todo, index, toggleTodo, deleteTodo, getTodoForUpdate, cancelUpdate, indexUpdate}) => {
    
    return (
        <li className="todo-item">
            <div style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                {todo.text}
            </div>
            { index !== indexUpdate ?
                <div className="todo-group-btn">
                    <button className="todo-btn check" onClick={() => toggleTodo(index)} >
                        Complete
                    </button>
                    <button className="todo-btn update" onClick={() => getTodoForUpdate(index)} >
                        Update
                    </button>
                    <button className="todo-btn delete" onClick={() => deleteTodo(index)} >
                        Delete
                    </button>
                </div>
                :
                <button onClick={() => cancelUpdate()} >
                    Cancel
                </button>
            }
        </li>
    );
}

export default TodoItem;