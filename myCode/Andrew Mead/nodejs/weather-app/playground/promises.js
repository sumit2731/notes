let asyncAdd = (a,b)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Arguments should be numbers');
            }
        }, 1500);
    });
};

asyncAdd(8,'9').then((res) => {
    console.log(`Result 1: ${res}`);
    return asyncAdd(res,33);
}).then(res => {
    console.log(`Result 2: ${res}`);
}).catch(errorMessage => {
    console.log(errorMessage);
});