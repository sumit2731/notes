function customDeepClone(cloningParameter) {
    
    if(Array.isArray(cloningParameter)) {
        let clonedArray = [];
        for(let element of cloningParameter) {
            if(typeof element !== 'object') clonedArray.push(element);
            else clonedArray.push(customDeepClone(element));
        }
        return clonedArray;
    }
    else if(typeof cloningParameter === 'object') {
        let cloneObj = {};
        let properties = Object.keys(cloningParameter);
        for(let property of properties) {
            if(typeof cloningParameter[property] !== 'object') cloneObj[property] = cloningParameter[property]
            else cloneObj[property] =customDeepClone(cloningParameter[property])
        }
        return cloneObj;
    }
    else {
        return cloningParameter;
    }

}

let obj1 = {
    id: 1,
    hobbies: [
        'coding',
        {
            styling: 'css', 
            logic: 'js', 
            sources: {coding: 'algoxpert', css: 'frontendmasters'}
        },
        'improving'
    ],
    comppanies: {
        previous: 'synechron',
        current: 'Gainsght',
        next: 'Google'
    }
};

let clonedObj = customDeepClone(obj1);
obj1.hobbies[0] = "Cricket";
obj1.hobbies[1].logic = 'typescript';
console.log(clonedObj);