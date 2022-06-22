const getTodo = (STORAGE_KEY) => {
    const value = localStorage.getItem(STORAGE_KEY);

    let todoItems = null;

    try {
        if(Array.isArray(JSON.parse(value))){
            todoItems = JSON.parse(value);
        }
    } catch {
        todoItems = [];
    }

    return todoItems;
}

const saveTodo = (STORAGE_KEY, data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export { getTodo, saveTodo };