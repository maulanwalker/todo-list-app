import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';
import { TodoContext } from "./Main";

const TodoList = () => {
    const { state } = useContext(TodoContext);
    const [todos] = state;

    return (
        <div>
            <div>
                <TodoForm />
            </div>
            <ul>
                {Array.isArray(todos) ? todos.map((todo, i) => (
                    <TodoItem todo={todo} key={i} index={i} />
                )) : null}
            </ul>
        </div>
    )
}

export default TodoList;