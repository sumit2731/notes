/* 
Dering types form Object

*/
export const fruitCounts = {
    apple: 1,
    pear: 4,
    banana: 26
};


type FruitCounts = typeof fruitCounts;




type NewSingleFruitCount1 = keyof FruitCounts;

type NewSingleFruitCount2 = {
    [K in keyof FruitCounts]: number

}

type NewSingleFruitCount3 = {
    [K in keyof FruitCounts]: {
        [k2 in K] : number
    }

}



/* 
Converting a normal object type into union
*/

let demoObject = {
    a: 1,
    b: 'b',
    c: true
}

type demoObjectType = typeof demoObject;

type demoObjecKeytUnion =  keyof demoObjectType;

type sumit1 = {
    a: number,
    b: string,
    c: boolean
}["a" | "b" | "c"];

//to make it dynamic

type sumit2 = {
    a: number,
    b: string,
    c: boolean
}[keyof demoObjectType];


