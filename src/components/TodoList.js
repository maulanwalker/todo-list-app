import React,{useState} from "react";
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';
import { getTodo, saveTodo } from "../utils/LocalStorage";

const TodoList = () => {
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
        <div>
            <div>
                <TodoForm addTodo={addTodo}
                updateTodo={updateTodo}
                statusTodoUpdate={statusTodoUpdate}
                indexUpdate={indexUpdate}
                getOneTodoText={getOneTodoText} />
            </div>
            <ul>
                {Array.isArray(todos) ? todos.map((todo, i) => (
                    <TodoItem todo={todo}
                    key={i}
                    index={i}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    getTodoForUpdate={getTodoForUpdate}
                    cancelUpdate={cancelUpdate}
                    indexUpdate={indexUpdate} />
                )) : null}
            </ul>
        </div>
    )
}

export default TodoList;