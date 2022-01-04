function compare(obj1,obj2) {
    let dataType1 = typeof obj1;
    let dataType2 = typeof obj2;
    if((dataType1 === dataType2) && dataType1 === 'object') {
    
        if(Array.isArray(obj1) && Array.isArray(obj2)) {
            // [1,2,3,4,5,7]
            // [a,b,c,d]
            for(let i =0; i<= obj1.length; i++) {
                let isSame = isEqual(obj1[i], obj2[i]);
                if(!isSame) return false;
            }
            return true;
        }
        else  {
            for(let key of Object.keys(obj1)) {
                let isSame = isEqual(obj1[key], obj2[key]);
                if(!isSame) return false;  
            }
            return true;
        }
    }
    return false;
}


function isEqual(val1, val2) {
    let dataType1 = typeof val1;
    let dataType2 = typeof val2;
    if(dataType1 === dataType2) {
        if(dataType1 !== 'object') {
            return val1 === val2;
        }
        else {
            return compare(val1, val2);
        }        

    }
    return false;
}

let obj1 = {
    a: 1,
    b: {name: 'sumeet'},
    c: [1,2,3],
    d: null
}

let obj2 = {
    a: 1,
    b: {name: 'sumeet'},
    c: [1,2,3],
    d: null
}

console.log(compare(obj1,obj2));