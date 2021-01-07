// Read existing notes from localStorage

const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => {
       return note.id === id;
    });
    notes.splice(noteIndex,1);
};

// generate DOM code
const generateDOM = (note) => {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', () => {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });
    if (note.title. length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed Note';
    }
    textEl.setAttribute('href',`/edit.html#${note.id}`);
    noteEl.appendChild(textEl);
    return noteEl;
};

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a,b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    else if (sortBy === 'alphabatical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    
};

// render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchtext.toLowerCase())
    });
    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach((note) => {
        const noteEl = generateDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    });
};

const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`;
};