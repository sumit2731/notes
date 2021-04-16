// Fetch existing todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
};

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const removeTodo = (id)=> {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id;
    });
    todos.splice(todoIndex,1);
}
 const toggleTodo = (id) => {
    const todo = todos.find((todo) => {
        return todo.id === id;
    });
    if (todo !== undefined) {
        todo.completed = !todo.completed;
    }
 };

const renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter((toDo) => {
        const searchTextMatch = toDo.text.toLowerCase().includes(filters.searchtext.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !toDo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    const Incomplete = filteredTodos.filter((todo) => {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(Incomplete));
    
    filteredTodos.forEach((toDo) => {
        
        document.querySelector('#todos').appendChild(generateTodoDOM(toDo));
    });
};

const generateTodoDOM = (toDo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.checked = toDo.completed;
    // if (toDo.completed) {
    //     checkbox.setAttribute('checked', 'true');
    // }
    checkbox.addEventListener('change', () =>{
        // toggleTodo(toDo.id);
        // toDo.completed = !toDo.completed; 
        toggleTodo(toDo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });
    todoEl.appendChild(checkbox);
    const todotext = document.createElement('span');
    todotext.textContent = toDo.text;
    todoEl.appendChild(todotext);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click',() => {
        removeTodo(toDo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });
    return todoEl;
};

const generateSummaryDOM = (Incomplete) => {
    const summary = document.createElement('h1');
    summary.textContent = `You have ${Incomplete.length} Incomplete items`;
    return summary;
    
};