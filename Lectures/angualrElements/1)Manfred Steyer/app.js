


function f1() {
    let p1= new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(10);
                }, 5000);
                }).then(() => console.log("This is attched to promise"));
    return p1;
}

f1().then(() => console.log("Promise Resolved"));