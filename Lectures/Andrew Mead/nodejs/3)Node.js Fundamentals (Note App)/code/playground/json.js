const fs = require('fs');

let orignalNote = {
    title: 'some title',
    body: 'some body'
};

let orignalNoteString = JSON.stringify(orignalNote);

fs.writeFileSync('notes.json', orignalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(note);