import React from "react";

const TodoItem = ({todo, index, toggleTodo, deleteTodo}) => {
    return (
        <li className="todo-item">
            <div style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                {todo.text}
            </div>
            <div className="todo-group-btn">
                <button className="todo-btn secondary" onClick={() => toggleTodo(index)} >
                    Complete
                </button>
                <button className="todo-btn primary" onClick={() => deleteTodo(index)} >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TodoItem;