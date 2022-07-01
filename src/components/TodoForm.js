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
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={value} onChange={e => setValue(e.target.value)} placeholder="Add todo" />

                <button className="w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                type="submit">{ !statusTodoUpdate ? "Add" : "Update"}</button>
            </div>
        </form>
    )
}

export default TodoForm;