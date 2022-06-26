import React, { useState, useEffect } from "react";

const TodoForm = ({addTodo, updateTodo, statusTodoUpdate, getOneTodoText, indexUpdate}) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        if(statusTodoUpdate){
            setValue(() => getOneTodoText());
        }else{
            setValue("");
        }
    }, [statusTodoUpdate, getOneTodoText])

    const handleSubmit = e => {
        e.preventDefault();
        if(value){
            if(statusTodoUpdate){
                updateTodo(indexUpdate, value)
            }else{
                addTodo(value);
            }
            setValue("");
        } else {
            alert("Please Add Todo")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add todo" />
            <button className="todo-add-update-btn" type="submit">{ !statusTodoUpdate ? "Add" : "Update"}</button>
        </form>
    )
}

export default TodoForm;