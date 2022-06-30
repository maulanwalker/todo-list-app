import React, { useContext } from "react";
import { TodoContext } from "./Main";

const TodoItem = (todo, index) => {
    const { state, func } = useContext(TodoContext);
    const [indexUpdate] = state;
    const [, toggleTodo, , , cancelUpdate, getTodoForUpdate, deleteTodo] = func;

    return (
        <li className="todo-item">
            <div style={{textDecoration: todo.todo.isCompleted ? "line-through" : ""}}>
                {todo.todo.text}
            </div>
            { index !== indexUpdate ?
                <div className="todo-group-btn">
                    <button className="todo-btn check" onClick={() => toggleTodo(todo.index)} >
                        Complete
                    </button>
                    <button className="todo-btn update" onClick={() => getTodoForUpdate(todo.index)} >
                        Update
                    </button>
                    <button className="todo-btn delete" onClick={() => deleteTodo(todo.todo.index)} >
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