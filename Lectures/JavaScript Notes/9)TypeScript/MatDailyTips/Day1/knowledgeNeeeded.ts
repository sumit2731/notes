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

/* 
here a "Computeed property name" is used in left hand side so this [k2 in k] syntax is required.
to used it on riht hand side, it is not required. without [] harcoded K will be used.
and using [K] will throw error

*/

type NewSingleFruitCount3 = {
    [K in keyof FruitCounts]: {
        [K1 in K]: number
    }

}



/* 
Converting a object type into union
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


