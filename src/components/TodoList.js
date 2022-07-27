import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';
import { TodoContext } from "./Main";

const TodoList = () => {
    const { state } = useContext(TodoContext);
    const [todos] = state;

    return (
        <>
            <div className="block p-6 rounded-lg shadow-lg bg-white">
                <TodoForm />
            </div>
            <ul className="mt-4">
                {Array.isArray(todos) ? todos.map((todo, i) => (
                    <TodoItem todo={todo} key={i} index={i} />
                )) : null}
            </ul>
        </>
    )
}

export default TodoList;