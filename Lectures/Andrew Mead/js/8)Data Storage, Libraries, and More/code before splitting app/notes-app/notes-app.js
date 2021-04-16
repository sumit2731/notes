let notes = [];

const filters = {
    searchtext: ''
};
const notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null) {
        notes = JSON.parse(notesJSON);
    }


const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchtext.toLowerCase())
    });
    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach((note) => {
       const noteEl = document.createElement('p');
       if (note.title.length > 0) {
           noteEl.textContent = note.title;
       } else {
           noteEl.textContent = 'Unnamed Note';
       }
       
       document.querySelector('#notes').appendChild(noteEl);
    });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    notes.push({
        title: '',
        body: ''
    });
    localStorage.setItem('notes',JSON.stringify(notes));
    renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchtext = e.target.value;
    renderNotes(notes, filters);
});

// document.querySelector('#name-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// });
// document.querySelector('#for-fun').addEventListener('change', (e) => {
//     console.log(e.target.checked);
// });
document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
});