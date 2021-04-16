let hourElement = document.querySelector('.hour');
let minuteElement = document.querySelector('.minute');
let secondElement = document.querySelector('.second');

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
secondElement.innerHTML = seconds;
minuteElement.innerHTML = minutes;
hourElement.innerHTML = hours;

setInterval(() => {
    seconds = seconds +1;
    secondElement.innerHTML = seconds;
}, 1000);

setInterval(() => {
    minutes = minutes + 1;
    minuteElement.innerHTML = minutes;
}, 60*1000);

setInterval(() => {
    hours = hours + 1;
    hourElement.innerHTML = hours;
}, 60*60*1000);