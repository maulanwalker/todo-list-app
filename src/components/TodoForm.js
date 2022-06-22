import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(value){
            addTodo(value);
            setValue("");
        } else {
            alert("Please Add Todo")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add todo" />
            <button className="todo-add-btn" type="submit">Add</button>
        </form>
    )
}

export default TodoForm;