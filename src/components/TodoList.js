import React,{useState} from "react";
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';
import { getTodo, saveTodo } from "../utils/LocalStorage";

const TodoList = () => {
    const [todos, setTodos] = useState(getTodo("todos") || []);

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

    const deleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      saveTodo("todos", newTodos);
    }

    return (
        <div>
            <div>
                <TodoForm addTodo={addTodo} />
            </div>
            <ul>
                {Array.isArray(todos) ? todos.map((todo, i) => (
                    <TodoItem todo={todo} key={i} index={i} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )) : null}
            </ul>
        </div>
    )
}

export default TodoList;