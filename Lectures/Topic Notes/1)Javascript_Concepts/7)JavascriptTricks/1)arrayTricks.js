
/* 
a)Using length property to resize the array -
*/

    let array_values = [1, 2, 3, 4, 5, 6, 7, 8];  
    console.log(array_values.length); 
    // 8  
    array_values.length = 5;  
    console.log(array_values.length); 
    // 5  
    console.log(array_values); 
    // [1, 2, 3, 4, 5]

//b)Remove  dulicates from array
    let oldArray = [1,2,3,3,1,2,4,5];
    let newArray = Array.from(new Set(oldArray));
        or
    let newArray = [...new Set(oldArray)];

//c)Randomly Shuffle elements of array -
    arr.sort((a,b) => Math.random() - 0.5);

//d)How to create large arrays with some elements inside them-
    
    //1)Empty Array

        let arr1 = new Array(50); // this will create array of 50 elements. each element is undefined
        //{0: 1, 1: 2,name:'Sumeet',length:2} - Array like object
        
        let arr2 = Array.from({length: 50}); // each value will be undefined

    //2)Array with Some Values - 

        arr2.fill('Static Value') // each element will have 'static value'
        
        let arr2 = Array.from({length: 50}, (element,i) => i+1)
        
        arr1 = new Array(50).join('1.1').split('');
    
        //go throught this article- https://medium.com/javascript-everyday/javascript-array-from-53287c195487

//e)Get smallest and largest values in array -

    let min = Math.min(...arr);
    let max = Math.max(...arr);

//f)filtering boolean false values -


        const groceries = ['apple', null, 'milk', undefined, 'bread', ''];

        const cleanList = groceries.filter(Boolean);

        console.log(cleanList);


