let todos = [];

const filters = {
    searchtext: '',
    hideCompleted: false
};
const todosJSON = localStorage.getItem('todos');

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}
const renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter((toDo) => {
        return toDo.text.toLowerCase().includes(filters.searchtext.toLowerCase());
    });

    filteredTodos = filteredTodos.filter((todo) => {
        return !filters.hideCompleted || !todo.completed
        // if (filters.hideCompleted) {
        //     return !todo.completed;
        // } else {
        //     return true;
        // }
    });
    
   const Incomplete = filteredTodos.filter((todo) => {
       return !todo.completed;
   });

   document.querySelector('#todos').innerHTML = '';
    
   const summary = document.createElement('h1');
    summary.textContent = `You have ${Incomplete.length} Incomplete items`;
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach((toDo) => {
        const p = document.createElement('p');
        p.textContent = toDo.text;
        document.querySelector('#todos').appendChild(p);
    });
};


renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input',(e) => {
    filters.searchtext = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos , filters);
    e.target.elements.text.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos,filters);
});