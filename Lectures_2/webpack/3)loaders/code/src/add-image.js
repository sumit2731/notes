import Tiger from './tiger.jpg';

function addImage() {
    console.log("add image called");
    const img = document.createElement('img');
    img.alt = 'Kiwi';
    img.width = 300;
    img.src = Tiger;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;