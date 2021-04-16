const fs = require("fs");
let fetchNotes = () => {
  try {
    let noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

let saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

let duplicateNotes = notes.filter(
    note => note.title.toLowerCase() === title.toLowerCase()
  );
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  return fetchNotes();
};

let getNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(
    note => note.title.toLowerCase() === title.toLowerCase()
  );
  return filteredNotes[0];
};

let removeNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(
    note => note.title.toLowerCase() !== title.toLowerCase()
  );
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

let logNote = note => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
