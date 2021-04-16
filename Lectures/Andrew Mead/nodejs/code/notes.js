let addNote = (title,body) => {
    console.log('Adding Note', title, body);
}
let getAll = () => {
    console.log('Geting all');
}
let getNote = (title) => {
    console.log('Getting note', title);
};

let removeNote = (title) => {
    console.log('removing note', title);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};