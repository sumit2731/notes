let notes = getSavedNotes();

const filters = {
    searchtext: '',
    sortBy: 'byEdited'
};


renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    const timestamp = moment().valueOf();
    
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    saveNotes(notes);
    // before adding edit.html
    // renderNotes(notes, filters);
    location.assign(`/edit.html#${id}`);
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
    filters.sortBy = e.target.value;
    renderNotes(notes,filters);
});

window.addEventListener('storage', (e) => {
   if(e.key === 'notes') {
       notes = getSavedNotes();
       renderNotes(notes, filters);
   } 
});

const now = moment();
now.date(27).month(5).year(1991);
console.log(now.format('MMM D,  YYYY'));
