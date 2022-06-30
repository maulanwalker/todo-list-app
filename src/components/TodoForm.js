import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "./Main";

const TodoForm = () => {
    const [value, setValue] = useState("");
    const { state, func } = useContext(TodoContext);
    const [, , indexUpdate, statusTodoUpdate] = state;
    const [addTodo, , updateTodo, getOneTodoText, , , ] = func;

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