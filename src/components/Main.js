import React, {useState, createContext} from "react";
import TodoList from "./TodoList";
import { getTodo, saveTodo } from "../utils/LocalStorage";

const TodoContext = createContext();

const Main = () => {
    const [todos, setTodos] = useState(getTodo("todos") || []);
    const [todoForUpdate, setTodoForUpdate] = useState({});
    const [indexUpdate, setIndexUpdate] = useState(null);
    const [statusTodoUpdate, setStatusTodoUpdate] = useState(false);

    const addTodo = (value) => {
        let currentTodo = [...todos];
        currentTodo.push({text: value, isCompleted: false});
        setTodos(currentTodo);
        saveTodo("todos", currentTodo);
    }
    
    const toggleTodo = (index) => {
        const newTodos = [...todos];
        console.log(index)
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
        saveTodo("todos", newTodos);
    }

    const updateTodo = (index, value) => {
        const newTodos = [...todos];
        newTodos[index].text = value;
        todos.splice(index, 1, newTodos);
        setTodos(newTodos);
        saveTodo("todos", newTodos);
        setStatusTodoUpdate(false);
        setIndexUpdate(null);
    }
        
    const getOneTodoText = () => {
        return todoForUpdate.text;
    }
    
    const cancelUpdate = () => {
        setTodoForUpdate("");
        setStatusTodoUpdate(false);
        setIndexUpdate(null);
    }
    
    const getTodoForUpdate = (index) => {
        const newTodos = [...todos];
        setTodoForUpdate(newTodos[index]);
        setStatusTodoUpdate(true);
        setIndexUpdate(index);
        return {todoForUpdate, indexUpdate};
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        saveTodo("todos", newTodos);
    }

    return (
        <div className="">
            <TodoContext.Provider value={{state: [ todos, todoForUpdate, indexUpdate, statusTodoUpdate ],
            func: [ addTodo, toggleTodo, updateTodo, getOneTodoText, cancelUpdate, getTodoForUpdate, deleteTodo ]}}>
                <TodoList todos={todos} todoForUpdate={todoForUpdate}
                indexUpdate={indexUpdate} statusTodoUpdate={statusTodoUpdate}
                addTodo={addTodo} toggleTodo={toggleTodo} updateTodo={updateTodo}
                getOneTodoText={getOneTodoText} cancelUpdate={cancelUpdate}
                getTodoForUpdate={getTodoForUpdate} deleteTodo={deleteTodo} />
            </TodoContext.Provider>
        </div>
    )
}

export {  Main, TodoContext };