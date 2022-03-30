/* 
Learn how to derive a union type from an object - an incredibly useful switcheroo that's at the heart 
 of most TS magic out there.
*/

/* 
chnage this type -

*/

export const fruitCounts = {
    apple: 1,
    pear: 4,
    banana: 26
};


/* 
to this type -

*/

type SingleFruitCount = 
    |
        {
            apple: number
        }
    |
        { 
            banana: number
        }
    |
        {
            pear: number
        };

type FruitCounts = typeof fruitCounts;


type NewSingleFruitCount = {
    [K in keyof FruitCounts]: {
        [K2 in K]: number
    }
}[keyof FruitCounts];


const singleFruitCount: NewSingleFruitCount = {
    apple: 2
}