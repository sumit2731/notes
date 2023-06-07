console.log("Hello");
let numberOfTasks = 0;

// function start() {
//     document.getElementById('timeouts').innerHTML = numberOfTasks;
//     numberOfTasks++;
//     setTimeout(start);
// }




function start() {
    Promise.resolve().then(addThen);
}

function addThen() {
    document.getElementById('timeouts').innerHTML = numberOfTasks;
    numberOfTasks++;
    Promise.resolve().then(addThen);
}

start();